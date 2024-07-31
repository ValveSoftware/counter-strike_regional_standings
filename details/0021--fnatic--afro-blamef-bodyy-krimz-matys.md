### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Global Rank: [21](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1420.7<br />
<br />
Final Rank Value (1420.7) = Starting Rank Value (1587.3) + Head To Head Adjustments (-166.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.701[<sup>1</sup>](#table2)
- Bounty Collected: 0.552[<sup>2</sup>](#table1)
- Opponent Network: 0.372[<sup>2</sup>](#table1)
- LAN Wins: 0.675[<sup>2</sup>](#table1)

The average of these factors is 0.575<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1587.3
- 400 + ( ( 0.575 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1587.3


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
|           60 |       28 | 2024-07-31 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -24.53 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           59 |      119 | 2024-07-28 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -23.98 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           58 |      128 | 2024-07-28 | SAW               | W   | 1.000      | 0.435        | -                | 0.545 (0.237)    | 0 (0.000) |     5.70 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           57 |      147 | 2024-07-27 | MOUZ NXT          | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     3.95 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           56 |      176 | 2024-07-26 | Sampi             | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     1.29 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      310 | 2024-07-22 | Passion UA        | W   | 1.000      | 0.500        | 0.172 (0.086)    | 1.000 (0.500)    | -         |     4.03 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      342 | 2024-07-21 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.141 (0.071)    | 1.000 (0.500)    | -         |     4.06 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      387 | 2024-07-20 | Sangal            | W   | 1.000      | 0.500        | 0.221 (0.111)    | 0.824 (0.412)    | -         |     6.63 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      405 | 2024-07-19 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     1.50 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      459 | 2024-07-18 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -27.35 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      585 | 2024-07-16 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     1.22 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      839 | 2024-06-16 | 9z                | L   | 0.901      | -            | -                | -                | -         |   -14.10 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      841 | 2024-06-16 | Ninjas in Pyjamas | W   | 0.900      | 0.548        | 0.227 (0.112)    | 0.477 (0.235)    | 1 (0.900) |    18.34 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      866 | 2024-06-15 | RED Canids        | W   | 0.895      | 0.548        | -                | 0.738 (0.362)    | 1 (0.895) |     4.55 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      877 | 2024-06-15 | Imperial          | W   | 0.893      | 0.548        | 0.245 (0.120)    | 0.685 (0.335)    | 1 (0.893) |     7.92 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      907 | 2024-06-14 | RED Canids        | L   | 0.887      | -            | -                | -                | -         |   -23.39 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |     1187 | 2024-06-07 | Ninjas in Pyjamas | L   | 0.840      | -            | -                | -                | -         |   -10.52 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           43 |     1252 | 2024-06-06 | BIG               | W   | 0.833      | 0.715        | 0.133 (0.079)    | -                | 1 (0.833) |     6.14 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           42 |     1272 | 2024-06-06 | FURIA             | L   | 0.832      | -            | -                | -                | -         |    -9.19 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           41 |     1290 | 2024-06-06 | Complexity        | W   | 0.830      | 0.715        | 0.319 (0.189)    | -                | 1 (0.830) |    19.14 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           40 |     1320 | 2024-06-05 | Eternal Fire      | W   | 0.826      | 0.715        | 0.759 (0.448)    | 0.462 (0.273)    | 1 (0.826) |    20.38 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           39 |     1337 | 2024-06-05 | BetBoom           | L   | 0.824      | -            | -                | -                | -         |   -15.56 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           38 |     1420 | 2024-06-02 | DMS               | L   | 0.805      | -            | -                | -                | -         |   -23.78 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           37 |     1488 | 2024-05-31 | SAW               | W   | 0.792      | -            | -                | -                | -         |     4.76 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           36 |     1490 | 2024-05-31 | Sangal            | W   | 0.791      | -            | -                | -                | -         |     2.95 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           35 |     1821 | 2024-05-18 | ENCE              | L   | 0.705      | -            | -                | -                | -         |   -13.88 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           34 |     1830 | 2024-05-18 | GamerLegion       | L   | 0.704      | -            | -                | -                | -         |   -19.19 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           33 |     1858 | 2024-05-17 | ENCE              | W   | 0.698      | 0.769        | 0.175 (0.094)    | -                | -         |     7.66 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           32 |     2223 | 2024-05-03 | 9 Pandas          | L   | 0.607      | -            | -                | -                | -         |   -18.14 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     2250 | 2024-05-02 | Sashi             | L   | 0.599      | -            | -                | -                | -         |   -16.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     2275 | 2024-05-01 | AMKAL             | W   | 0.592      | -            | -                | -                | -         |     1.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2292 | 2024-05-01 | PARIVISION        | W   | 0.590      | -            | -                | -                | -         |     1.36 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2315 | 2024-04-30 | Nexus             | W   | 0.583      | -            | -                | -                | -         |     0.35 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2374 | 2024-04-27 | Virtus.pro        | L   | 0.565      | -            | -                | -                | -         |    -5.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2414 | 2024-04-25 | Eternal Fire      | L   | 0.554      | -            | -                | -                | -         |    -4.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2437 | 2024-04-24 | 3DMAX             | L   | 0.545      | -            | -                | -                | -         |    -6.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2461 | 2024-04-23 | Virtus.pro        | W   | 0.538      | 0.889        | 0.483 (0.231)    | -                | 1 (0.538) |    12.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2615 | 2024-04-18 | KOI               | L   | 0.506      | -            | -                | -                | -         |   -14.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2870 | 2024-04-09 | Apeks             | L   | 0.446      | -            | -                | -                | -         |   -13.65 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     2899 | 2024-04-08 | Apeks             | W   | 0.440      | -            | -                | -                | -         |     0.37 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     2911 | 2024-04-08 | KOI               | W   | 0.438      | -            | -                | -                | -         |     0.90 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3240 | 2024-03-23 | BetBoom           | L   | 0.331      | -            | -                | -                | -         |    -7.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3273 | 2024-03-21 | 3DMAX             | W   | 0.319      | -            | -                | -                | -         |     6.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3629 | 2024-03-06 | BLEED             | W   | 0.219      | -            | -                | -                | -         |     0.25 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3661 | 2024-03-05 | Young Ninjas      | W   | 0.213      | -            | -                | -                | -         |     0.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3689 | 2024-03-04 | 3DMAX             | W   | 0.205      | -            | -                | -                | -         |     4.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3705 | 2024-03-03 | Gaimin Gladiators | L   | 0.199      | -            | -                | -                | -         |    -6.04 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3713 | 2024-03-03 | AURA              | W   | 0.199      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3721 | 2024-03-03 | ex-Preasy         | W   | 0.199      | -            | -                | -                | -         |     0.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3758 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.185      | -            | -                | -                | -         |     0.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3774 | 2024-02-28 | ex-Preasy         | L   | 0.174      | -            | -                | -                | -         |    -5.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3890 | 2024-02-23 | GamerLegion       | L   | 0.139      | -            | -                | -                | -         |    -4.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     4034 | 2024-02-17 | SAW               | L   | 0.099      | -            | -                | -                | -         |    -2.81 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     4070 | 2024-02-16 | KOI               | L   | 0.091      | -            | -                | -                | -         |    -2.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     4093 | 2024-02-15 | AMKAL             | W   | 0.084      | -            | -                | -                | 1 (0.084) |     0.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     4121 | 2024-02-14 | Virtus.pro        | L   | 0.080      | -            | -                | -                | -         |    -0.79 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     4130 | 2024-02-14 | BetBoom           | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.78 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     4201 | 2024-02-09 | 3DMAX             | L   | 0.046      | -            | -                | -                | -         |    -0.50 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4206 | 2024-02-09 | ex-Sprout         | L   | 0.045      | -            | -                | -                | -         |    -1.42 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4209 | 2024-02-09 | Endpoint          | W   | 0.045      | -            | -                | -                | -         |     0.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($123,036.17)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.37) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-07-22 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-06-16 |      0.901 | $30,000.00     | $27,037.90      |
| 2024-06-09 |      0.852 | $20,000.00     | $17,049.18      |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-05-04 |      0.612 | $2,000.00      | $1,224.88       |
| 2024-05-02 |      0.599 | $3,500.00      | $2,097.67       |
| 2024-03-06 |      0.219 | $50,000.00     | $10,966.42      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
