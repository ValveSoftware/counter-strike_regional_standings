### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1527.8<br />
<br />
Final Rank Value (1527.8) = Starting Rank Value (1677.6) + Head To Head Adjustments (-149.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.723[<sup>1</sup>](#table2)
- Bounty Collected: 0.629[<sup>2</sup>](#table1)
- Opponent Network: 0.405[<sup>2</sup>](#table1)
- LAN Wins: 0.758[<sup>2</sup>](#table1)

The average of these factors is 0.629<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1677.6
- 400 + ( ( 0.629 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1677.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |      370 | 2024-06-07 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -4.28 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           69 |      437 | 2024-06-06 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.485 (0.347)    | 1 (1.000) |    23.82 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           68 |      449 | 2024-06-06 | Complexity        | W   | 1.000      | 0.715        | 0.426 (0.305)    | 0.442 (0.316)    | 1 (1.000) |    25.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           67 |      485 | 2024-06-05 | BIG               | W   | 1.000      | 0.715        | 0.225 (0.161)    | 0.433 (0.310)    | 1 (1.000) |    14.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           66 |      495 | 2024-06-05 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -15.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           65 |      507 | 2024-06-05 | fnatic            | W   | 1.000      | 0.715        | 0.290 (0.207)    | 0.666 (0.476)    | 1 (1.000) |    12.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           64 |      785 | 2024-05-25 | B8                | L   | 1.000      | -            | -                | -                | -         |   -24.79 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |      811 | 2024-05-24 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |      900 | 2024-05-21 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -5.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |      926 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.281 (0.216)    | 0.688 (0.529)    | -         |    19.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |      935 | 2024-05-20 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -2.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |      948 | 2024-05-20 | MIBR              | W   | 1.000      | 0.769        | 0.281 (0.216)    | 0.688 (0.529)    | -         |    20.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |     1105 | 2024-05-15 | Falcons           | L   | 0.976      | -            | -                | -                | -         |   -11.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |     1176 | 2024-05-14 | MOUZ              | L   | 0.968      | -            | -                | -                | -         |    -1.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1215 | 2024-05-12 | B8                | L   | 0.956      | -            | -                | -                | -         |   -25.82 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1222 | 2024-05-12 | 9 Pandas          | W   | 0.955      | 0.435        | -                | 0.663 (0.275)    | -         |     3.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1254 | 2024-05-11 | Metizport         | W   | 0.948      | -            | -                | -                | -         |     2.57 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1272 | 2024-05-10 | Enterprise        | W   | 0.941      | -            | -                | -                | -         |     1.40 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1332 | 2024-05-07 | FlyQuest          | L   | 0.922      | -            | -                | -                | -         |   -17.61 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     1384 | 2024-05-04 | AMKAL             | L   | 0.902      | -            | -                | -                | -         |   -23.20 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     1389 | 2024-05-04 | 9 Pandas          | W   | 0.901      | -            | -                | -                | -         |     2.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     1412 | 2024-05-03 | Insilio           | W   | 0.893      | -            | -                | -                | -         |     1.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     1452 | 2024-05-01 | EYEBALLERS        | W   | 0.882      | -            | -                | -                | -         |     0.97 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     1482 | 2024-04-30 | 3DMAX             | L   | 0.874      | -            | -                | -                | -         |   -22.25 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     1555 | 2024-04-26 | M80               | W   | 0.850      | 0.889        | 0.205 (0.155)    | 0.666 (0.503)    | 1 (0.850) |     4.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     1569 | 2024-04-26 | Falcons           | W   | 0.848      | 0.889        | 0.381 (0.287)    | -                | 1 (0.848) |    15.02 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     1593 | 2024-04-25 | Vitality          | L   | 0.842      | -            | -                | -                | -         |    -2.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     1624 | 2024-04-23 | M80               | W   | 0.829      | 0.889        | 0.205 (0.151)    | 0.666 (0.491)    | 1 (0.829) |     3.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     1728 | 2024-04-19 | Cloud9            | L   | 0.803      | -            | -                | -                | -         |   -17.95 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     1743 | 2024-04-19 | Eternal Fire      | L   | 0.802      | -            | -                | -                | -         |    -4.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     1770 | 2024-04-18 | Apeks             | W   | 0.796      | -            | -                | -                | -         |     2.32 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     1775 | 2024-04-18 | brazylijski luz   | W   | 0.796      | -            | -                | -                | -         |     0.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     1780 | 2024-04-18 | ex-iNation        | W   | 0.795      | -            | -                | -                | -         |     0.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     1897 | 2024-04-14 | 3DMAX             | W   | 0.768      | 0.358        | -                | 1.000 (0.275)    | -         |     3.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     1904 | 2024-04-13 | OG                | L   | 0.763      | -            | -                | -                | -         |   -20.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     1909 | 2024-04-13 | Aurora            | L   | 0.762      | -            | -                | -                | -         |   -11.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     1916 | 2024-04-13 | Sampi             | W   | 0.761      | -            | -                | -                | -         |     0.94 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     1943 | 2024-04-11 | Aurora            | L   | 0.750      | -            | -                | -                | -         |   -11.69 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     1951 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.749      | 0.684        | 0.315 (0.161)    | -                | -         |    16.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     1956 | 2024-04-11 | AMKAL             | L   | 0.748      | -            | -                | -                | -         |   -21.48 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     1997 | 2024-04-10 | Aurora            | W   | 0.742      | -            | -                | -                | -         |    11.70 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     2052 | 2024-04-09 | BIG               | W   | 0.735      | -            | -                | -                | -         |     6.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     2127 | 2024-04-06 | Alliance          | W   | 0.715      | -            | -                | -                | -         |     0.52 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     2141 | 2024-04-05 | BLEED             | W   | 0.709      | -            | -                | -                | -         |     5.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     2179 | 2024-04-04 | Alliance          | W   | 0.703      | -            | -                | -                | -         |     0.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     2191 | 2024-04-04 | BLEED             | W   | 0.701      | -            | -                | -                | -         |     5.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2361 | 2024-03-27 | FAVBET            | L   | 0.649      | -            | -                | -                | -         |   -20.23 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2398 | 2024-03-24 | FORZE             | L   | 0.628      | -            | -                | -                | -         |   -18.89 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2413 | 2024-03-23 | fnatic            | W   | 0.621      | -            | -                | -                | -         |     7.62 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2452 | 2024-03-21 | B8                | W   | 0.608      | -            | -                | -                | -         |     1.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     2848 | 2024-03-05 | BLEED             | L   | 0.501      | -            | -                | -                | -         |   -12.36 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           19 |     2866 | 2024-03-04 | Gaimin Gladiators | W   | 0.494      | -            | -                | -                | -         |     1.55 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           18 |     2881 | 2024-03-03 | ex-Preasy         | L   | 0.489      | -            | -                | -                | -         |   -15.07 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           17 |     2885 | 2024-03-03 | ex-Sprout         | W   | 0.489      | -            | -                | -                | -         |     0.05 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           16 |     2925 | 2024-03-01 | ex-Preasy         | W   | 0.476      | -            | -                | -                | -         |     0.32 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           15 |     2957 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.462      | -            | -                | -                | -         |     0.47 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           14 |     3064 | 2024-02-23 | ex-Guild Eagles   | L   | 0.428      | -            | -                | -                | -         |   -13.20 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3203 | 2024-02-17 | Eternal Fire      | L   | 0.389      | -            | -                | -                | -         |    -3.48 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3227 | 2024-02-16 | Natus Vincere     | L   | 0.383      | -            | -                | -                | -         |    -2.01 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3265 | 2024-02-15 | Enterprise        | W   | 0.374      | -            | -                | -                | 1 (0.374) |     0.37 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3300 | 2024-02-14 | Into the Breach   | W   | 0.369      | -            | -                | -                | 1 (0.369) |     0.07 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3303 | 2024-02-14 | fnatic            | L   | 0.368      | -            | -                | -                | -         |    -7.07 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3386 | 2024-02-08 | FORZE             | L   | 0.330      | -            | -                | -                | -         |   -10.17 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     3392 | 2024-02-08 | Nemiga            | L   | 0.329      | -            | -                | -                | -         |    -9.21 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     3521 | 2024-02-01 | Cloud9            | L   | 0.283      | -            | -                | -                | -         |    -7.77 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     3548 | 2024-01-31 | Eternal Fire      | L   | 0.275      | -            | -                | -                | -         |    -2.81 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     3766 | 2024-01-20 | OG                | W   | 0.202      | -            | -                | -                | -         |     0.40 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     3820 | 2024-01-19 | Cloud9            | L   | 0.196      | -            | -                | -                | -         |    -5.42 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     3879 | 2024-01-18 | BIG               | W   | 0.189      | -            | -                | -                | -         |     1.26 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     3887 | 2024-01-18 | Zero Tenacity     | W   | 0.189      | -            | -                | -                | -         |     0.23 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($124,345.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-05-12 |      0.956 | $10,000.00     | $9,559.68       |
| 2024-05-12 |      0.956 | $17,500.00     | $16,721.75      |
| 2024-05-04 |      0.902 | $10,000.00     | $9,022.37       |
| 2024-05-02 |      0.889 | $1,000.00      | $889.13         |
| 2024-04-14 |      0.769 | $52,500.00     | $40,372.73      |
| 2024-04-14 |      0.768 | $9,000.00      | $6,915.28       |
| 2024-03-06 |      0.509 | $12,500.00     | $6,364.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
