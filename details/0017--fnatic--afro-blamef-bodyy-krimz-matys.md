### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1456.7<br />
<br />
Final Rank Value (1456.7) = Starting Rank Value (1611.8) + Head To Head Adjustments (-155.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.731[<sup>1</sup>](#table2)
- Bounty Collected: 0.578[<sup>2</sup>](#table1)
- Opponent Network: 0.341[<sup>2</sup>](#table1)
- LAN Wins: 0.745[<sup>2</sup>](#table1)

The average of these factors is 0.599<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1611.8
- 400 + ( ( 0.599 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1611.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       68 | 2024-07-22 | Passion UA        | W   | 1.000      | 0.500        | 0.163 (0.081)    | 1.000 (0.500)    | 0 (0.000) |     3.97 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           56 |      100 | 2024-07-21 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.169 (0.085)    | 1.000 (0.500)    | -         |     3.96 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      145 | 2024-07-20 | Sangal            | W   | 1.000      | 0.500        | 0.195 (0.097)    | 0.860 (0.430)    | -         |     6.09 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      163 | 2024-07-19 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     1.24 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      217 | 2024-07-18 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -27.51 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      343 | 2024-07-16 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     1.00 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      597 | 2024-06-16 | 9z                | L   | 0.949      | -            | -                | -                | -         |   -13.16 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      599 | 2024-06-16 | Ninjas in Pyjamas | W   | 0.948      | 0.548        | 0.287 (0.149)    | 0.537 (0.279)    | 1 (0.948) |    20.86 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      624 | 2024-06-15 | RED Canids        | W   | 0.942      | 0.548        | -                | 0.793 (0.410)    | 1 (0.942) |     5.46 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      635 | 2024-06-15 | Imperial          | W   | 0.940      | 0.548        | 0.317 (0.164)    | 0.653 (0.337)    | 1 (0.940) |     9.95 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      665 | 2024-06-14 | RED Canids        | L   | 0.934      | -            | -                | -                | -         |   -23.84 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      945 | 2024-06-07 | Ninjas in Pyjamas | L   | 0.887      | -            | -                | -                | -         |    -9.27 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |     1010 | 2024-06-06 | BIG               | W   | 0.880      | 0.715        | 0.173 (0.109)    | 0.347 (0.218)    | 1 (0.880) |     8.11 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |     1030 | 2024-06-06 | FURIA             | L   | 0.879      | -            | -                | -                | -         |    -8.46 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           43 |     1048 | 2024-06-06 | Complexity        | W   | 0.878      | 0.715        | 0.405 (0.254)    | 0.378 (0.237)    | 1 (0.878) |    21.61 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           42 |     1078 | 2024-06-05 | Eternal Fire      | W   | 0.873      | 0.715        | 0.833 (0.520)    | 0.443 (0.277)    | 1 (0.873) |    20.71 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           41 |     1095 | 2024-06-05 | BetBoom           | L   | 0.872      | -            | -                | -                | -         |   -15.30 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           40 |     1178 | 2024-06-02 | DMS               | L   | 0.852      | -            | -                | -                | -         |   -25.27 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           39 |     1246 | 2024-05-31 | SAW               | W   | 0.839      | -            | -                | -                | -         |     5.30 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           38 |     1248 | 2024-05-31 | Sangal            | W   | 0.839      | -            | -                | -                | -         |     2.96 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           37 |     1579 | 2024-05-18 | ENCE              | L   | 0.753      | -            | -                | -                | -         |   -16.38 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           36 |     1588 | 2024-05-18 | GamerLegion       | L   | 0.752      | -            | -                | -                | -         |   -19.93 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           35 |     1616 | 2024-05-17 | ENCE              | W   | 0.746      | 0.769        | 0.171 (0.098)    | 0.380 (0.218)    | -         |     6.50 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           34 |     1981 | 2024-05-03 | 9 Pandas          | L   | 0.654      | -            | -                | -                | -         |   -19.37 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     2008 | 2024-05-02 | Sashi             | L   | 0.647      | -            | -                | -                | -         |   -17.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     2033 | 2024-05-01 | AMKAL             | W   | 0.640      | -            | -                | -                | -         |     1.81 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     2050 | 2024-05-01 | PARIVISION        | W   | 0.638      | -            | -                | -                | -         |     1.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     2073 | 2024-04-30 | Nexus             | W   | 0.631      | -            | -                | -                | -         |     0.41 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2132 | 2024-04-27 | Virtus.pro        | L   | 0.612      | -            | -                | -                | -         |    -4.46 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2172 | 2024-04-25 | Eternal Fire      | L   | 0.601      | -            | -                | -                | -         |    -6.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2195 | 2024-04-24 | 3DMAX             | L   | 0.593      | -            | -                | -                | -         |   -16.00 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2219 | 2024-04-23 | Virtus.pro        | W   | 0.586      | 0.889        | 0.595 (0.310)    | -                | 1 (0.586) |    14.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2373 | 2024-04-18 | KOI               | L   | 0.553      | -            | -                | -                | -         |   -16.13 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2628 | 2024-04-09 | Apeks             | L   | 0.494      | -            | -                | -                | -         |   -15.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2657 | 2024-04-08 | Apeks             | W   | 0.487      | -            | -                | -                | -         |     0.48 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2669 | 2024-04-08 | KOI               | W   | 0.486      | -            | -                | -                | -         |     1.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     2998 | 2024-03-23 | BetBoom           | L   | 0.379      | -            | -                | -                | -         |    -7.45 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     3031 | 2024-03-21 | 3DMAX             | W   | 0.366      | -            | -                | -                | -         |     1.37 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3387 | 2024-03-06 | BLEED             | W   | 0.267      | -            | -                | -                | -         |     0.34 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3419 | 2024-03-05 | Young Ninjas      | W   | 0.260      | -            | -                | -                | -         |     0.10 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3447 | 2024-03-04 | 3DMAX             | W   | 0.252      | -            | -                | -                | -         |     1.00 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3463 | 2024-03-03 | Gaimin Gladiators | L   | 0.247      | -            | -                | -                | -         |    -7.42 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3471 | 2024-03-03 | AURA              | W   | 0.246      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3479 | 2024-03-03 | ex-Preasy         | W   | 0.246      | -            | -                | -                | -         |     0.11 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3516 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.232      | -            | -                | -                | -         |     0.28 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3532 | 2024-02-28 | ex-Preasy         | L   | 0.221      | -            | -                | -                | -         |    -6.87 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3648 | 2024-02-23 | GamerLegion       | L   | 0.186      | -            | -                | -                | -         |    -5.78 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3792 | 2024-02-17 | SAW               | L   | 0.146      | -            | -                | -                | -         |    -4.18 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3828 | 2024-02-16 | KOI               | L   | 0.138      | -            | -                | -                | -         |    -4.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3851 | 2024-02-15 | AMKAL             | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.23 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3879 | 2024-02-14 | Virtus.pro        | L   | 0.127      | -            | -                | -                | -         |    -1.05 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3888 | 2024-02-14 | BetBoom           | W   | 0.126      | -            | -                | -                | 1 (0.126) |     1.45 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     3959 | 2024-02-09 | 3DMAX             | L   | 0.093      | -            | -                | -                | -         |    -2.61 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     3964 | 2024-02-09 | ex-Sprout         | L   | 0.093      | -            | -                | -                | -         |    -2.91 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     3967 | 2024-02-09 | Endpoint          | W   | 0.092      | -            | -                | -                | -         |     0.05 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4148 | 2024-01-30 | Insilio           | L   | 0.027      | -            | -                | -                | -         |    -0.82 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4154 | 2024-01-30 | 500               | W   | 0.026      | -            | -                | -                | -         |     0.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,356.03)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-06-16 |      0.949 | $30,000.00     | $28,456.53      |
| 2024-06-09 |      0.900 | $20,000.00     | $17,994.94      |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-05-04 |      0.660 | $2,000.00      | $1,319.46       |
| 2024-05-02 |      0.647 | $3,500.00      | $2,263.17       |
| 2024-03-06 |      0.267 | $50,000.00     | $13,330.80      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
