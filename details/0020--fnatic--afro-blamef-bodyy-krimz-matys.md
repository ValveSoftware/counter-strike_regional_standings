### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1491.8<br />
<br />
Final Rank Value (1491.8) = Starting Rank Value (1622.1) + Head To Head Adjustments (-130.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.657[<sup>1</sup>](#table2)
- Bounty Collected: 0.585[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.781[<sup>2</sup>](#table1)

The average of these factors is 0.569<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1622.1
- 400 + ( ( 0.569 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1622.1


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
|           54 |       55 | 2024-07-16 | CYBERSHOKE        | W   | 1.000      | 0.500        | -                | 0.309 (0.155)    | 0 (0.000) |     1.05 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      309 | 2024-06-16 | 9z                | L   | 0.996      | -            | -                | -                | -         |   -11.13 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      311 | 2024-06-16 | Ninjas in Pyjamas | W   | 0.995      | 0.548        | 0.343 (0.187)    | 0.534 (0.291)    | 1 (0.995) |    24.00 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      336 | 2024-06-15 | RED Canids        | W   | 0.989      | 0.548        | 0.123 (0.067)    | 0.714 (0.387)    | 1 (0.989) |     6.68 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      347 | 2024-06-15 | Imperial          | W   | 0.987      | 0.548        | 0.386 (0.209)    | 0.607 (0.329)    | 1 (0.987) |    13.25 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      377 | 2024-06-14 | RED Canids        | L   | 0.981      | -            | -                | -                | -         |   -23.88 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      657 | 2024-06-07 | Ninjas in Pyjamas | L   | 0.934      | -            | -                | -                | -         |    -7.14 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      722 | 2024-06-06 | BIG               | W   | 0.927      | 0.715        | 0.212 (0.141)    | 0.382 (0.254)    | 1 (0.927) |    11.08 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      742 | 2024-06-06 | FURIA             | L   | 0.926      | -            | -                | -                | -         |   -12.69 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      760 | 2024-06-06 | Complexity        | W   | 0.925      | 0.715        | 0.445 (0.294)    | 0.412 (0.272)    | 1 (0.925) |    25.09 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |      790 | 2024-06-05 | Eternal Fire      | W   | 0.920      | 0.715        | 1.000 (0.658)    | 0.401 (0.264)    | 1 (0.920) |    23.46 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           43 |      807 | 2024-06-05 | BetBoom           | L   | 0.919      | -            | -                | -                | -         |   -12.67 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           42 |      890 | 2024-06-02 | DMS               | L   | 0.899      | -            | -                | -                | -         |   -26.28 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           41 |      958 | 2024-05-31 | SAW               | W   | 0.886      | -            | -                | -                | -         |     7.44 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           40 |      960 | 2024-05-31 | Sangal            | W   | 0.886      | -            | -                | -                | -         |     3.79 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           39 |     1291 | 2024-05-18 | ENCE              | L   | 0.800      | -            | -                | -                | -         |   -16.23 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           38 |     1300 | 2024-05-18 | GamerLegion       | L   | 0.799      | -            | -                | -                | -         |   -19.50 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           37 |     1328 | 2024-05-17 | ENCE              | W   | 0.793      | 0.769        | 0.212 (0.129)    | 0.377 (0.230)    | -         |     8.04 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           36 |     1693 | 2024-05-03 | 9 Pandas          | L   | 0.701      | -            | -                | -                | -         |   -20.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |     1720 | 2024-05-02 | Sashi             | L   | 0.694      | -            | -                | -                | -         |   -18.33 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |     1745 | 2024-05-01 | AMKAL             | W   | 0.687      | 0.384        | 0.134 (0.035)    | -                | -         |     2.27 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     1762 | 2024-05-01 | PARIVISION        | W   | 0.685      | -            | -                | -                | -         |     1.14 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     1785 | 2024-04-30 | Nexus             | W   | 0.678      | -            | -                | -                | -         |     0.49 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     1844 | 2024-04-27 | Virtus.pro        | L   | 0.659      | -            | -                | -                | -         |    -5.56 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     1884 | 2024-04-25 | Eternal Fire      | L   | 0.648      | -            | -                | -                | -         |    -5.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     1907 | 2024-04-24 | 3DMAX             | L   | 0.640      | -            | -                | -                | -         |   -17.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     1931 | 2024-04-23 | Virtus.pro        | W   | 0.633      | 0.889        | 0.349 (0.196)    | 0.367 (0.206)    | 1 (0.633) |    14.54 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2085 | 2024-04-18 | KOI               | L   | 0.600      | -            | -                | -                | -         |   -16.89 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2340 | 2024-04-09 | Apeks             | L   | 0.541      | -            | -                | -                | -         |   -16.17 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2369 | 2024-04-08 | Apeks             | W   | 0.535      | -            | -                | -                | -         |     0.78 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2381 | 2024-04-08 | KOI               | W   | 0.533      | -            | -                | -                | -         |     1.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2710 | 2024-03-23 | BetBoom           | L   | 0.426      | -            | -                | -                | -         |    -6.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2743 | 2024-03-21 | 3DMAX             | W   | 0.413      | -            | -                | -                | -         |     1.56 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     3099 | 2024-03-06 | BLEED             | W   | 0.314      | -            | -                | -                | -         |     0.58 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     3131 | 2024-03-05 | Young Ninjas      | W   | 0.307      | -            | -                | -                | -         |     0.15 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3159 | 2024-03-04 | 3DMAX             | W   | 0.300      | 0.500        | 0.209 (0.031)    | 1.000 (0.150)    | -         |     1.22 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3175 | 2024-03-03 | Gaimin Gladiators | L   | 0.294      | -            | -                | -                | -         |    -8.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3183 | 2024-03-03 | AURA              | W   | 0.294      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3191 | 2024-03-03 | ex-Preasy         | W   | 0.293      | -            | -                | -                | -         |     0.17 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3228 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.279      | -            | -                | -                | -         |     0.42 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3244 | 2024-02-28 | ex-Preasy         | L   | 0.268      | -            | -                | -                | -         |    -8.30 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3360 | 2024-02-23 | GamerLegion       | L   | 0.233      | -            | -                | -                | -         |    -7.18 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3504 | 2024-02-17 | SAW               | L   | 0.193      | -            | -                | -                | -         |    -5.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3540 | 2024-02-16 | KOI               | L   | 0.186      | -            | -                | -                | -         |    -5.32 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3563 | 2024-02-15 | AMKAL             | W   | 0.179      | -            | -                | -                | 1 (0.179) |     0.33 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3591 | 2024-02-14 | Virtus.pro        | L   | 0.174      | -            | -                | -                | -         |    -1.83 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3600 | 2024-02-14 | BetBoom           | W   | 0.173      | -            | -                | -                | 1 (0.173) |     2.91 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3671 | 2024-02-09 | 3DMAX             | L   | 0.140      | -            | -                | -                | -         |    -3.94 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3676 | 2024-02-09 | ex-Sprout         | L   | 0.140      | -            | -                | -                | -         |    -4.39 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     3679 | 2024-02-09 | Endpoint          | W   | 0.139      | -            | -                | -                | -         |     0.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     3860 | 2024-01-30 | Insilio           | L   | 0.074      | -            | -                | -                | -         |    -2.27 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     3866 | 2024-01-30 | 500               | W   | 0.074      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4054 | 2024-01-20 | Gaimin Gladiators | W   | 0.008      | -            | -                | -                | -         |     0.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4061 | 2024-01-20 | Virtus.pro        | L   | 0.007      | -            | -                | -                | -         |    -0.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,668.86)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $30,000.00     | $29,873.28      |
| 2024-06-09 |      0.947 | $20,000.00     | $18,939.44      |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-05-04 |      0.707 | $2,000.00      | $1,413.91       |
| 2024-05-02 |      0.694 | $3,500.00      | $2,428.46       |
| 2024-03-06 |      0.314 | $50,000.00     | $15,692.06      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
