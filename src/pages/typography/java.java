for(Avance avance : avances){
    for(PrimeIndividuelle pi : iprimes){
        for(Contrat contrat : contrats){
            for(PrimeGlobale pg : gprimes){
                GrilleSalariale gs = new GrilleSalariale(avance, pi, contrat, pg);
                this.gsRepository.save(gs);
            }
        }
    }
}