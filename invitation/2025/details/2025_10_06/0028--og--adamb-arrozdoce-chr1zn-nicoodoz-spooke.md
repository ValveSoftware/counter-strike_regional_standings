### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, Chr1zN, nicoodoz, spooke<br />
Global Rank: [28](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1400.6<br />
<br />
Final Rank Value (1400.6) = Starting Rank Value (1538.4) + Head To Head Adjustments (-137.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.532[<sup>1</sup>](#table2)
- Bounty Collected: 0.482[<sup>2</sup>](#table1)
- Opponent Network: 0.347[<sup>2</sup>](#table1)
- LAN Wins: 0.963[<sup>2</sup>](#table1)

The average of these factors is 0.581<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1538.4
- 400 + ( ( 0.581 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1538.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |        2 | 2025-10-05 | ECSTATIC          | W   | 1.000      | -            | -                | -                | 1 (1.000) |    14.01 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           65 |        5 | 2025-10-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -14.18 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           64 |       14 | 2025-10-04 | Wildcard          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.50 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           63 |       25 | 2025-10-04 | SkinRave          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.59 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           62 |      101 | 2025-09-30 | BIG               | L   | 1.000      | -            | -                | -                | -         |   -21.09 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           61 |      107 | 2025-09-30 | Alliance          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.64 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           60 |      116 | 2025-09-30 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -31.05 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           59 |      152 | 2025-09-28 | Passion UA        | W   | 1.000      | 0.339        | 0.184 (0.062)    | -                | 1 (1.000) |    15.65 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           58 |      213 | 2025-09-27 | BASEMENT BOYS     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.96 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           57 |      257 | 2025-09-26 | ECSTATIC          | W   | 1.000      | -            | -                | -                | 1 (1.000) |    15.10 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           56 |      285 | 2025-09-26 | SINNERS           | W   | 1.000      | 0.339        | -                | 0.861 (0.292)    | 1 (1.000) |     2.35 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           55 |      308 | 2025-09-25 | AM                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.25 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           54 |      444 | 2025-09-19 | B8                | L   | 1.000      | -            | -                | -                | -         |   -14.26 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           53 |      468 | 2025-09-18 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -14.78 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           52 |      620 | 2025-09-13 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -26.88 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           51 |      674 | 2025-09-12 | Tricked           | W   | 1.000      | -            | -                | -                | -         |     1.34 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           50 |      723 | 2025-09-11 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -26.99 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           49 |      728 | 2025-09-11 | BIG               | W   | 1.000      | -            | -                | -                | -         |     9.75 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           48 |      778 | 2025-09-10 | M80               | W   | 1.000      | -            | -                | -                | -         |     8.48 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           47 |      808 | 2025-09-09 | AaB               | W   | 1.000      | -            | -                | -                | -         |     1.32 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           46 |     1038 | 2025-08-30 | BetBoom           | L   | 0.953      | -            | -                | -                | -         |   -15.36 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           45 |     1075 | 2025-08-29 | Metizport         | W   | 0.946      | -            | -                | -                | -         |     0.97 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           44 |     1103 | 2025-08-28 | PARIVISION        | L   | 0.941      | -            | -                | -                | -         |   -17.52 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           43 |     1133 | 2025-08-27 | Gentle Mates      | W   | 0.934      | 0.384        | 0.233 (0.084)    | 1.000 (0.359)    | -         |    15.40 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           42 |     1159 | 2025-08-26 | BC.Game           | W   | 0.928      | -            | -                | -                | -         |     3.58 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           41 |     1224 | 2025-08-22 | BC.Game           | L   | 0.899      | -            | -                | -                | -         |   -25.20 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           40 |     1242 | 2025-08-21 | fnatic            | W   | 0.893      | 0.486        | 0.146 (0.063)    | 0.891 (0.387)    | -         |    13.89 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           39 |     1293 | 2025-08-19 | Partizan          | W   | 0.880      | 0.486        | -                | 0.982 (0.420)    | -         |     4.45 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           38 |     1344 | 2025-08-17 | FUT               | W   | 0.866      | 0.624        | 0.221 (0.120)    | 0.606 (0.328)    | -         |     4.96 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           37 |     1369 | 2025-08-16 | BIG               | W   | 0.861      | -            | -                | -                | -         |     8.96 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           36 |     1412 | 2025-08-15 | TPuDCATb TPu      | W   | 0.855      | -            | -                | -                | -         |     1.17 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           35 |     1431 | 2025-08-15 | JiJieHao          | W   | 0.853      | -            | -                | -                | -         |     1.50 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           34 |     1457 | 2025-08-14 | 9INE              | L   | 0.848      | -            | -                | -                | -         |   -17.63 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           33 |     1479 | 2025-08-14 | Inner Circle      | W   | 0.846      | 0.624        | 0.119 (0.063)    | 0.790 (0.417)    | -         |     6.08 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           32 |     1559 | 2025-08-12 | RUBY              | W   | 0.834      | 0.384        | -                | 1.000 (0.321)    | -         |     1.11 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           31 |     1646 | 2025-08-10 | PARIVISION        | W   | 0.821      | 0.435        | 0.254 (0.091)    | 0.863 (0.308)    | -         |     8.74 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           30 |     1658 | 2025-08-10 | Sangal            | L   | 0.820      | -            | -                | -                | -         |   -24.60 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           29 |     1660 | 2025-08-10 | SAW               | W   | 0.820      | 0.435        | 0.220 (0.078)    | -                | -         |    13.12 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           28 |     1685 | 2025-08-09 | ENCE              | W   | 0.813      | 0.435        | 0.177 (0.062)    | 1.000 (0.353)    | -         |    12.14 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           27 |     1703 | 2025-08-08 | Tricked           | W   | 0.806      | -            | -                | -                | -         |     1.18 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           26 |     1720 | 2025-08-07 | MOUZ              | L   | 0.800      | -            | -                | -                | -         |    -3.03 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           25 |     1805 | 2025-08-01 | FUT               | L   | 0.760      | -            | -                | -                | -         |   -20.36 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           24 |     1977 | 2025-07-21 | 9INE              | W   | 0.687      | 0.419        | -                | 1.000 (0.288)    | -         |     6.76 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           23 |     1981 | 2025-07-21 | Rounds            | W   | 0.687      | -            | -                | -                | -         |     0.05 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           22 |     2117 | 2025-07-15 | FUT               | L   | 0.647      | -            | -                | -                | -         |   -17.46 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           21 |     2123 | 2025-07-15 | Nemiga            | L   | 0.647      | -            | -                | -                | -         |   -18.16 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           20 |     2140 | 2025-07-14 | Gentle Mates      | W   | 0.641      | -            | -                | -                | -         |    10.04 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           19 |     2436 | 2025-06-20 | fnatic            | L   | 0.480      | -            | -                | -                | -         |    -6.35 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           18 |     2469 | 2025-06-18 | RUBY              | W   | 0.466      | -            | -                | -                | -         |     0.49 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           17 |     2678 | 2025-06-08 | Falcons           | L   | 0.402      | -            | -                | -                | -         |    -2.33 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           16 |     2693 | 2025-06-07 | M80               | L   | 0.395      | -            | -                | -                | -         |   -10.56 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           15 |     2706 | 2025-06-07 | Virtus.pro        | L   | 0.393      | -            | -                | -                | -         |    -8.85 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           14 |     2729 | 2025-06-05 | NRG               | W   | 0.381      | -            | -                | -                | 1 (0.381) |     2.19 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           13 |     2744 | 2025-06-04 | TYLOO             | W   | 0.373      | 0.624        | 0.767 (0.179)    | -                | -         |     8.08 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           12 |     2756 | 2025-06-03 | B8                | L   | 0.368      | -            | -                | -                | -         |    -6.46 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           11 |     2766 | 2025-06-03 | Passion UA        | W   | 0.367      | 0.624        | 0.184 (0.042)    | -                | -         |     6.17 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           10 |     2992 | 2025-05-18 | PARIVISION        | L   | 0.259      | -            | -                | -                | -         |    -5.70 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            9 |     3010 | 2025-05-17 | 9INE              | W   | 0.252      | -            | -                | -                | -         |     3.67 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            8 |     3043 | 2025-05-15 | Sangal            | W   | 0.242      | -            | -                | -                | -         |     0.23 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            7 |     3296 | 2025-05-06 | Sangal            | L   | 0.181      | -            | -                | -                | -         |    -5.56 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            6 |     3326 | 2025-05-05 | Zero Tenacity     | W   | 0.174      | -            | -                | -                | -         |     0.47 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            5 |     3386 | 2025-05-03 | Spirit Academy    | L   | 0.159      | -            | -                | -                | -         |    -4.83 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            4 |     3555 | 2025-04-26 | ECLOT             | W   | 0.113      | -            | -                | -                | -         |     0.19 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            3 |     3757 | 2025-04-15 | Metizport         | W   | 0.040      | -            | -                | -                | -         |     0.02 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            2 |     3777 | 2025-04-14 | 9 Pandas          | W   | 0.034      | -            | -                | -                | -         |     0.01 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            1 |     3785 | 2025-04-14 | Astralis          | W   | 0.033      | -            | -                | -                | -         |     0.79 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,183.98)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-05 |      1.000 | $1,300.00      | $1,300.00       |
| 2025-09-28 |      1.000 | $5,629.00      | $5,629.00       |
| 2025-09-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-09-01 |      0.968 | $1,250.00      | $1,209.73       |
| 2025-08-31 |      0.961 | $2,000.00      | $1,921.24       |
| 2025-08-22 |      0.901 | $5,833.00      | $5,256.34       |
| 2025-08-10 |      0.821 | $22,000.00     | $18,054.13      |
| 2025-06-22 |      0.494 | $2,750.00      | $1,357.85       |
| 2025-06-10 |      0.415 | $10,000.00     | $4,151.02       |
| 2025-05-18 |      0.261 | $5,000.00      | $1,304.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
