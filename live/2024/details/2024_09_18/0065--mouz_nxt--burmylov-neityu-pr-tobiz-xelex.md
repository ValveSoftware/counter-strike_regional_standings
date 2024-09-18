### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [65](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [48]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  979.2<br />
<br />
Final Rank Value (979.2) = Starting Rank Value (975.8) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.8
- 400 + ( ( 0.294 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 975.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |      247 | 2024-09-10 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -19.43 | Burmylov, Neityu, PR, TOBIZ, xelex    |
|           85 |      264 | 2024-09-09 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -14.98 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           84 |      272 | 2024-09-08 | ZEROvariant       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.95 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           83 |      364 | 2024-09-05 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -23.71 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           82 |      570 | 2024-08-29 | TSM               | W   | 1.000      | 0.384        | 0.064 (0.024)    | 0.864 (0.332)    | 0 (0.000) |    17.63 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           81 |      610 | 2024-08-28 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -15.57 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           80 |      690 | 2024-08-27 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -20.78 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           79 |      725 | 2024-08-26 | CYBERSHOKE        | W   | 1.000      | 0.435        | -                | 0.750 (0.326)    | 0 (0.000) |    14.89 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           78 |      953 | 2024-08-21 | Into the Breach   | W   | 1.000      | 0.384        | -                | 0.524 (0.201)    | 0 (0.000) |    11.20 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           77 |     1053 | 2024-08-17 | GUN5              | L   | 0.988      | -            | -                | -                | -         |   -19.89 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           76 |     1064 | 2024-08-17 | RUSTEC            | W   | 0.987      | -            | -                | -                | 0 (0.000) |     1.34 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           75 |     1120 | 2024-08-15 | CYBERSHOKE        | L   | 0.973      | -            | -                | -                | -         |   -17.52 | Burmylov, Neityu, PR, sirah, TMB      |
|           74 |     1142 | 2024-08-14 | kONO              | W   | 0.966      | 0.384        | -                | 0.553 (0.205)    | 0 (0.000) |     8.61 | Burmylov, Neityu, PR, sirah, TMB      |
|           73 |     1296 | 2024-08-09 | Endpoint          | L   | 0.933      | -            | -                | -                | -         |   -18.63 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           72 |     1325 | 2024-08-08 | AMKAL             | W   | 0.926      | 0.426        | 0.121 (0.048)    | -                | 0 (0.000) |    15.94 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           71 |     1494 | 2024-08-03 | 1WIN              | L   | 0.895      | -            | -                | -                | -         |   -19.05 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           70 |     1702 | 2024-07-29 | CYBERSHOKE        | W   | 0.861      | 0.426        | -                | 0.750 (0.275)    | 0 (0.000) |     9.63 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           69 |     1705 | 2024-07-29 | Monte Gen         | W   | 0.860      | -            | -                | -                | 0 (0.000) |     8.87 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           68 |     1761 | 2024-07-27 | fnatic            | L   | 0.848      | -            | -                | -                | -         |    -4.05 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           67 |     1833 | 2024-07-25 | Aurora Young Blud | W   | 0.832      | 0.435        | -                | 0.711 (0.257)    | 0 (0.000) |     9.49 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           66 |     1956 | 2024-07-21 | fnatic            | L   | 0.806      | -            | -                | -                | -         |    -3.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           65 |     1996 | 2024-07-20 | BLEED             | W   | 0.800      | 0.500        | 0.106 (0.043)    | 0.653 (0.261)    | -         |    18.57 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           64 |     2008 | 2024-07-19 | Rhyno             | W   | 0.795      | 0.500        | 0.053 (0.021)    | 0.455 (0.181)    | -         |     9.45 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           63 |     2061 | 2024-07-18 | Ninjas in Pyjamas | L   | 0.788      | -            | -                | -                | -         |    -2.33 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           62 |     2207 | 2024-07-16 | Rhyno             | W   | 0.773      | 0.500        | 0.053 (0.020)    | -                | -         |     9.43 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           61 |     2586 | 2024-06-13 | B8                | L   | 0.552      | -            | -                | -                | -         |    -6.65 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           60 |     2647 | 2024-06-10 | Endpoint          | L   | 0.533      | -            | -                | -                | -         |   -10.06 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           59 |     2686 | 2024-06-09 | GhoulsW           | W   | 0.527      | -            | -                | -                | -         |     0.45 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           58 |     2698 | 2024-06-09 | BLEED             | L   | 0.527      | -            | -                | -                | -         |    -4.19 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           57 |     2762 | 2024-06-08 | Sampi             | W   | 0.520      | 0.435        | -                | 1.000 (0.226)    | -         |     5.76 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           56 |     2770 | 2024-06-08 | ECLOT             | L   | 0.520      | -            | -                | -                | -         |    -6.21 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           55 |     2797 | 2024-06-07 | GamerLegion       | L   | 0.515      | -            | -                | -                | -         |    -6.32 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           54 |     2863 | 2024-06-06 | Rhyno             | W   | 0.508      | -            | -                | -                | -         |     5.52 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           53 |     2888 | 2024-06-06 | Entropiq          | W   | 0.507      | -            | -                | -                | -         |     0.43 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           52 |     2992 | 2024-06-04 | NAVI Junior       | W   | 0.493      | -            | -                | -                | -         |     4.30 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           51 |     2998 | 2024-06-04 | Aurora Young Blud | W   | 0.492      | -            | -                | -                | -         |     5.23 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           50 |     3037 | 2024-06-02 | FURIA             | L   | 0.480      | -            | -                | -                | -         |    -0.36 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           49 |     3068 | 2024-06-01 | AMKAL             | W   | 0.473      | 0.435        | 0.121 (0.025)    | -                | -         |     9.69 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           48 |     3129 | 2024-05-30 | Sangal            | W   | 0.459      | 0.435        | 0.292 (0.058)    | -                | -         |    11.98 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           47 |     3170 | 2024-05-28 | RUBY              | W   | 0.447      | -            | -                | -                | -         |     4.87 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           46 |     3198 | 2024-05-27 | Nexus             | W   | 0.439      | -            | -                | -                | -         |     2.94 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           45 |     3205 | 2024-05-26 | 9 Pandas          | L   | 0.434      | -            | -                | -                | -         |    -5.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           44 |     3213 | 2024-05-26 | B8                | W   | 0.433      | 0.435        | 0.252 (0.047)    | 1.000 (0.188)    | -         |     9.36 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           43 |     3237 | 2024-05-25 | 3DMAX             | W   | 0.425      | 0.435        | 0.521 (0.096)    | -                | -         |    13.09 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           42 |     3252 | 2024-05-24 | Illuminar         | W   | 0.419      | -            | -                | -                | -         |     4.07 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           41 |     3264 | 2024-05-23 | Rare Atom         | W   | 0.413      | -            | -                | -                | -         |     3.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           40 |     3304 | 2024-05-22 | Rhyno             | L   | 0.407      | -            | -                | -                | -         |    -7.59 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           39 |     3346 | 2024-05-21 | DMS               | L   | 0.400      | -            | -                | -                | -         |    -8.28 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           38 |     3416 | 2024-05-19 | BLEED             | L   | 0.385      | -            | -                | -                | -         |    -2.55 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           37 |     3482 | 2024-05-17 | DMS               | W   | 0.372      | -            | -                | -                | -         |     3.99 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           36 |     3506 | 2024-05-16 | Sampi             | W   | 0.367      | -            | -                | -                | -         |     4.96 | Chr1zN, Neityu, PR, sirah, TOBIZ      |
|           35 |     3566 | 2024-05-15 | BLEED             | L   | 0.359      | -            | -                | -                | -         |    -2.13 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           34 |     3622 | 2024-05-14 | B8                | L   | 0.352      | -            | -                | -                | -         |    -3.89 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           33 |     3646 | 2024-05-13 | Space             | W   | 0.345      | -            | -                | -                | -         |     2.90 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           32 |     3668 | 2024-05-12 | B8                | L   | 0.339      | -            | -                | -                | -         |    -3.91 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           31 |     3679 | 2024-05-11 | Endpoint          | W   | 0.335      | -            | -                | -                | -         |     5.92 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           30 |     3708 | 2024-05-10 | Aurora            | W   | 0.328      | 0.435        | 0.268 (0.038)    | -                | -         |     9.20 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           29 |     3778 | 2024-05-07 | RUSH B            | W   | 0.307      | -            | -                | -                | -         |     3.12 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           28 |     3820 | 2024-05-05 | GL Academy        | W   | 0.293      | -            | -                | -                | -         |     1.39 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           27 |     3823 | 2024-05-04 | ex-Enterprise     | L   | 0.288      | -            | -                | -                | -         |    -6.01 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           26 |     3843 | 2024-05-03 | Nemiga            | L   | 0.280      | -            | -                | -                | -         |    -2.39 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           25 |     3860 | 2024-05-02 | Endpoint          | L   | 0.275      | -            | -                | -                | -         |    -3.87 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           24 |     3876 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.273      | -            | -                | -                | -         |     5.14 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           23 |     3881 | 2024-05-02 | 9 Pandas          | L   | 0.272      | -            | -                | -                | -         |    -3.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           22 |     3896 | 2024-05-01 | BLEED             | W   | 0.266      | -            | -                | -                | -         |     3.07 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           21 |     3908 | 2024-04-30 | ECLOT             | W   | 0.262      | -            | -                | -                | -         |     6.00 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           20 |     3918 | 2024-04-30 | NewBALLS          | W   | 0.260      | -            | -                | -                | -         |     0.52 | Burmylov, Chr1zN, PR, sirah, TOBIZ    |
|           19 |     3932 | 2024-04-29 | Nemiga            | L   | 0.255      | -            | -                | -                | -         |    -2.20 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           18 |     3942 | 2024-04-29 | Grannys Knockers  | W   | 0.253      | -            | -                | -                | -         |     1.44 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           17 |     3972 | 2024-04-27 | ECLOT             | W   | 0.241      | -            | -                | -                | -         |     5.62 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           16 |     4042 | 2024-04-25 | Insilio           | L   | 0.226      | -            | -                | -                | -         |    -3.66 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           15 |     4056 | 2024-04-24 | PARIVISION        | L   | 0.220      | -            | -                | -                | -         |    -2.66 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           14 |     4088 | 2024-04-22 | EYEBALLERS        | W   | 0.207      | -            | -                | -                | -         |     1.72 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           13 |     4095 | 2024-04-22 | Nemiga            | L   | 0.206      | -            | -                | -                | -         |    -1.76 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           12 |     4106 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.200      | -            | -                | -                | -         |     3.77 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           11 |     4112 | 2024-04-21 | ECLOT             | L   | 0.199      | -            | -                | -                | -         |    -1.69 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           10 |     4134 | 2024-04-20 | BLEED             | L   | 0.194      | -            | -                | -                | -         |    -4.18 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            9 |     4221 | 2024-04-18 | ex-Enterprise     | W   | 0.181      | -            | -                | -                | -         |     2.06 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            8 |     4243 | 2024-04-18 | ENCE Academy      | W   | 0.179      | -            | -                | -                | -         |     0.85 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            7 |     4290 | 2024-04-17 | JANO              | W   | 0.172      | -            | -                | -                | -         |     0.71 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            6 |     4303 | 2024-04-16 | GamerLegion       | L   | 0.167      | -            | -                | -                | -         |    -1.78 | Anlelele, Burmylov, Neityu, PR, sirah |
|            5 |     4329 | 2024-04-15 | Alliance          | W   | 0.159      | -            | -                | -                | -         |     1.51 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            4 |     4370 | 2024-04-12 | Permitta          | L   | 0.139      | -            | -                | -                | -         |    -2.37 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            3 |     4497 | 2024-04-09 | Zero Tenacity     | W   | 0.120      | -            | -                | -                | -         |     2.41 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            2 |     4527 | 2024-04-08 | B8                | W   | 0.113      | -            | -                | -                | -         |     2.39 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            1 |     4657 | 2024-04-03 | PARIVISION        | W   | 0.081      | -            | -                | -                | -         |     1.65 | Burmylov, Chr1zN, Neityu, PR, sirah   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,033.21)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-07-28 |      0.855 | $2,000.00      | $1,709.01       |
| 2024-07-22 |      0.814 | $12,500.00     | $10,174.87      |
| 2024-06-02 |      0.480 | $5,000.00      | $2,402.38       |
| 2024-05-26 |      0.434 | $10,000.00     | $4,340.81       |
| 2024-05-18 |      0.381 | $500.00        | $190.58         |
| 2024-05-12 |      0.341 | $5,000.00      | $1,705.73       |
| 2024-05-03 |      0.280 | $25,000.00     | $7,009.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
