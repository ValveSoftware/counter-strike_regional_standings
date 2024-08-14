### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Global Rank: [21](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1363.0<br />
<br />
Final Rank Value (1363.0) = Starting Rank Value (1460.4) + Head To Head Adjustments (-97.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.688[<sup>1</sup>](#table2)
- Bounty Collected: 0.540[<sup>2</sup>](#table1)
- Opponent Network: 0.355[<sup>2</sup>](#table1)
- LAN Wins: 0.567[<sup>2</sup>](#table1)

The average of these factors is 0.537<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1460.4
- 400 + ( ( 0.537 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1460.4


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
|           56 |      363 | 2024-08-03 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -13.38 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      414 | 2024-08-02 | Nemiga            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.14 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      446 | 2024-08-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.14 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      509 | 2024-07-31 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -23.78 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      600 | 2024-07-28 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -22.22 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      609 | 2024-07-28 | SAW               | W   | 1.000      | 0.435        | -                | 0.624 (0.271)    | 0 (0.000) |    12.47 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      628 | 2024-07-27 | MOUZ NXT          | W   | 1.000      | 0.435        | -                | 0.929 (0.404)    | -         |     4.80 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      657 | 2024-07-26 | Sampi             | W   | 1.000      | 0.435        | -                | 0.981 (0.426)    | -         |     1.65 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      791 | 2024-07-22 | Passion UA        | W   | 1.000      | 0.500        | 0.168 (0.084)    | 1.000 (0.500)    | -         |     5.32 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      823 | 2024-07-21 | MOUZ NXT          | W   | 1.000      | 0.500        | 0.130 (0.065)    | 0.929 (0.464)    | -         |     4.95 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      868 | 2024-07-20 | Sangal            | W   | 1.000      | 0.500        | 0.276 (0.138)    | 0.851 (0.425)    | -         |     9.01 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      886 | 2024-07-19 | CYBERSHOKE        | W   | 1.000      | 0.500        | -                | 0.442 (0.221)    | -         |     2.11 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |      940 | 2024-07-18 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -26.40 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           43 |     1066 | 2024-07-16 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     1.75 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           42 |     1320 | 2024-06-16 | 9z                | L   | 0.808      | -            | -                | -                | -         |   -10.04 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           41 |     1322 | 2024-06-16 | Ninjas in Pyjamas | W   | 0.807      | 0.548        | 0.236 (0.105)    | -                | 1 (0.807) |    17.32 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           40 |     1347 | 2024-06-15 | RED Canids        | W   | 0.802      | 0.548        | -                | 0.728 (0.320)    | 1 (0.802) |     4.66 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           39 |     1358 | 2024-06-15 | Imperial          | W   | 0.800      | 0.548        | 0.213 (0.093)    | 0.653 (0.286)    | 1 (0.800) |     7.46 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           38 |     1388 | 2024-06-14 | RED Canids        | L   | 0.794      | -            | -                | -                | -         |   -20.35 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           37 |     1668 | 2024-06-07 | Ninjas in Pyjamas | L   | 0.746      | -            | -                | -                | -         |    -8.57 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           36 |     1733 | 2024-06-06 | BIG               | W   | 0.740      | 0.715        | 0.155 (0.082)    | -                | 1 (0.740) |     8.17 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           35 |     1753 | 2024-06-06 | FURIA             | L   | 0.738      | -            | -                | -                | -         |    -6.68 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           34 |     1771 | 2024-06-06 | Complexity        | W   | 0.737      | 0.715        | 0.369 (0.194)    | -                | 1 (0.737) |    18.79 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           33 |     1801 | 2024-06-05 | Eternal Fire      | W   | 0.733      | 0.715        | 0.701 (0.367)    | 0.442 (0.231)    | 1 (0.733) |    18.53 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           32 |     1818 | 2024-06-05 | BetBoom           | L   | 0.731      | -            | -                | -                | -         |   -13.97 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           31 |     1901 | 2024-06-02 | DMS               | L   | 0.712      | -            | -                | -                | -         |   -20.59 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           30 |     1969 | 2024-05-31 | SAW               | W   | 0.698      | -            | -                | -                | -         |    12.34 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           29 |     1971 | 2024-05-31 | Sangal            | W   | 0.698      | -            | -                | -                | -         |     4.23 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           28 |     2302 | 2024-05-18 | ENCE              | L   | 0.612      | -            | -                | -                | -         |   -11.49 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           27 |     2311 | 2024-05-18 | GamerLegion       | L   | 0.611      | -            | -                | -                | -         |   -16.50 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           26 |     2339 | 2024-05-17 | ENCE              | W   | 0.605      | 0.769        | 0.160 (0.074)    | -                | -         |     7.31 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           25 |     2704 | 2024-05-03 | 9 Pandas          | L   | 0.513      | -            | -                | -                | -         |   -14.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2731 | 2024-05-02 | Sashi             | L   | 0.506      | -            | -                | -                | -         |   -13.10 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2756 | 2024-05-01 | AMKAL             | W   | 0.499      | -            | -                | -                | -         |     2.21 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2773 | 2024-05-01 | PARIVISION        | W   | 0.497      | -            | -                | -                | -         |     2.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     2796 | 2024-04-30 | Nexus             | W   | 0.490      | -            | -                | -                | -         |     0.49 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     2855 | 2024-04-27 | Virtus.pro        | L   | 0.471      | -            | -                | -                | -         |    -4.36 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     2895 | 2024-04-25 | Eternal Fire      | L   | 0.460      | -            | -                | -                | -         |    -3.59 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     2918 | 2024-04-24 | 3DMAX             | L   | 0.452      | -            | -                | -                | -         |    -4.49 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     2942 | 2024-04-23 | Virtus.pro        | W   | 0.445      | 0.889        | 0.512 (0.202)    | -                | 1 (0.445) |    10.00 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3096 | 2024-04-18 | KOI               | L   | 0.412      | -            | -                | -                | -         |   -11.89 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3351 | 2024-04-09 | Apeks             | L   | 0.353      | -            | -                | -                | -         |   -10.76 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3380 | 2024-04-08 | Apeks             | W   | 0.347      | -            | -                | -                | -         |     0.34 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3392 | 2024-04-08 | KOI               | W   | 0.345      | -            | -                | -                | -         |     0.86 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3721 | 2024-03-23 | BetBoom           | L   | 0.238      | -            | -                | -                | -         |    -5.21 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3754 | 2024-03-21 | 3DMAX             | W   | 0.226      | -            | -                | -                | -         |     4.98 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     4110 | 2024-03-06 | BLEED             | W   | 0.126      | -            | -                | -                | -         |     0.19 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     4142 | 2024-03-05 | Young Ninjas      | W   | 0.120      | -            | -                | -                | -         |     0.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     4170 | 2024-03-04 | 3DMAX             | W   | 0.112      | -            | -                | -                | -         |     2.53 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     4186 | 2024-03-03 | Gaimin Gladiators | L   | 0.106      | -            | -                | -                | -         |    -3.20 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     4194 | 2024-03-03 | AURA              | W   | 0.106      | -            | -                | -                | -         |     0.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     4202 | 2024-03-03 | ex-Preasy         | W   | 0.105      | -            | -                | -                | -         |     0.06 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     4239 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.092      | -            | -                | -                | -         |     0.16 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     4255 | 2024-02-28 | ex-Preasy         | L   | 0.080      | -            | -                | -                | -         |    -2.49 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4371 | 2024-02-23 | GamerLegion       | L   | 0.046      | -            | -                | -                | -         |    -1.42 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4515 | 2024-02-17 | SAW               | L   | 0.005      | -            | -                | -                | -         |    -0.08 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112,546.27)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-07-22 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-06-16 |      0.808 | $30,000.00     | $24,240.59      |
| 2024-06-09 |      0.759 | $20,000.00     | $15,184.31      |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-05-04 |      0.519 | $2,000.00      | $1,038.40       |
| 2024-05-02 |      0.506 | $3,500.00      | $1,771.31       |
| 2024-03-06 |      0.126 | $50,000.00     | $6,304.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
