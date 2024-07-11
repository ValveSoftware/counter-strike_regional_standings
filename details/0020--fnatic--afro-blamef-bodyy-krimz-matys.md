### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, blameF, bodyy, KRIMZ, MATYS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1488.5<br />
<br />
Final Rank Value (1488.5) = Starting Rank Value (1627.7) + Head To Head Adjustments (-139.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.592[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.810[<sup>2</sup>](#table1)

The average of these factors is 0.582<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1627.7
- 400 + ( ( 0.582 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1627.7


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
|           56 |      145 | 2024-06-16 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -11.76 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           55 |      147 | 2024-06-16 | Ninjas in Pyjamas | W   | 1.000      | 0.548        | 0.340 (0.187)    | 0.512 (0.281)    | 1 (1.000) |    23.82 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           54 |      172 | 2024-06-15 | RED Canids        | W   | 1.000      | 0.548        | 0.115 (0.063)    | 0.698 (0.382)    | 1 (1.000) |     6.44 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           53 |      183 | 2024-06-15 | Imperial          | W   | 1.000      | 0.548        | 0.390 (0.214)    | 0.646 (0.354)    | 1 (1.000) |    13.41 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           52 |      213 | 2024-06-14 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -24.69 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           51 |      493 | 2024-06-07 | Ninjas in Pyjamas | L   | 0.974      | -            | -                | -                | -         |    -7.85 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           50 |      558 | 2024-06-06 | BIG               | W   | 0.967      | 0.715        | 0.215 (0.149)    | 0.405 (0.280)    | 1 (0.967) |    12.28 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           49 |      578 | 2024-06-06 | FURIA             | L   | 0.966      | -            | -                | -                | -         |   -12.92 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           48 |      596 | 2024-06-06 | Complexity        | W   | 0.964      | 0.715        | 0.440 (0.303)    | 0.427 (0.295)    | 1 (0.964) |    25.99 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           47 |      626 | 2024-06-05 | Eternal Fire      | W   | 0.960      | 0.715        | 1.000 (0.687)    | 0.430 (0.296)    | 1 (0.960) |    24.91 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           46 |      643 | 2024-06-05 | BetBoom           | L   | 0.959      | -            | -                | -                | -         |   -12.79 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           45 |      726 | 2024-06-02 | DMS               | L   | 0.939      | -            | -                | -                | -         |   -27.37 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           44 |      794 | 2024-05-31 | SAW               | W   | 0.926      | -            | -                | -                | 0 (0.000) |     8.15 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           43 |      796 | 2024-05-31 | Sangal            | W   | 0.926      | -            | -                | -                | -         |     4.24 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           42 |     1127 | 2024-05-18 | ENCE              | L   | 0.840      | -            | -                | -                | -         |   -15.91 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           41 |     1136 | 2024-05-18 | GamerLegion       | L   | 0.838      | -            | -                | -                | -         |   -20.12 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           40 |     1164 | 2024-05-17 | ENCE              | W   | 0.832      | 0.769        | 0.216 (0.138)    | 0.399 (0.255)    | -         |     9.50 | afro, blameF, bodyy, KRIMZ, MATYS  |
|           39 |     1529 | 2024-05-03 | 9 Pandas          | L   | 0.741      | -            | -                | -                | -         |   -21.38 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           38 |     1556 | 2024-05-02 | Sashi             | L   | 0.733      | -            | -                | -                | -         |   -19.06 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           37 |     1581 | 2024-05-01 | AMKAL             | W   | 0.727      | 0.384        | 0.135 (0.038)    | -                | -         |     2.66 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           36 |     1598 | 2024-05-01 | PARIVISION        | W   | 0.725      | -            | -                | -                | -         |     1.29 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           35 |     1621 | 2024-04-30 | Romania           | W   | 0.718      | -            | -                | -                | -         |     0.52 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           34 |     1680 | 2024-04-27 | Virtus.pro        | L   | 0.699      | -            | -                | -                | -         |    -5.62 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           33 |     1720 | 2024-04-25 | Eternal Fire      | L   | 0.688      | -            | -                | -                | -         |    -5.01 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           32 |     1743 | 2024-04-24 | 3DMAX             | L   | 0.680      | -            | -                | -                | -         |   -17.95 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           31 |     1767 | 2024-04-23 | Virtus.pro        | W   | 0.672      | 0.889        | 0.347 (0.207)    | 0.391 (0.233)    | 1 (0.672) |    15.73 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           30 |     1921 | 2024-04-18 | KOI               | L   | 0.640      | -            | -                | -                | -         |   -17.97 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           29 |     2176 | 2024-04-09 | Apeks             | L   | 0.581      | -            | -                | -                | -         |   -17.24 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           28 |     2205 | 2024-04-08 | Apeks             | W   | 0.574      | -            | -                | -                | -         |     0.93 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           27 |     2217 | 2024-04-08 | KOI               | W   | 0.572      | -            | -                | -                | -         |     1.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           26 |     2546 | 2024-03-23 | BetBoom           | L   | 0.465      | -            | -                | -                | -         |    -6.52 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           25 |     2579 | 2024-03-21 | 3DMAX             | W   | 0.453      | -            | -                | -                | -         |     1.72 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           24 |     2935 | 2024-03-06 | BLEED             | W   | 0.353      | 0.500        | 0.348 (0.062)    | 0.908 (0.160)    | -         |     2.83 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           23 |     2967 | 2024-03-05 | Young Ninjas      | W   | 0.347      | -            | -                | -                | -         |     0.17 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           22 |     2995 | 2024-03-04 | 3DMAX             | W   | 0.339      | 0.500        | -                | 1.000 (0.170)    | -         |     1.41 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           21 |     3011 | 2024-03-03 | Gaimin Gladiators | L   | 0.334      | -            | -                | -                | -         |    -9.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           20 |     3019 | 2024-03-03 | AURA              | W   | 0.333      | -            | -                | -                | -         |     0.03 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           19 |     3027 | 2024-03-03 | ex-Preasy         | W   | 0.333      | -            | -                | -                | -         |     0.20 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           18 |     3064 | 2024-03-01 | ALTERNATE aTTaX   | W   | 0.319      | -            | -                | -                | -         |     0.47 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           17 |     3080 | 2024-02-28 | ex-Preasy         | L   | 0.308      | -            | -                | -                | -         |    -9.52 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           16 |     3196 | 2024-02-23 | GamerLegion       | L   | 0.273      | -            | -                | -                | -         |    -8.34 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           15 |     3340 | 2024-02-17 | SAW               | L   | 0.233      | -            | -                | -                | -         |    -6.40 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           14 |     3376 | 2024-02-16 | KOI               | L   | 0.225      | -            | -                | -                | -         |    -6.48 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           13 |     3399 | 2024-02-15 | AMKAL             | W   | 0.218      | -            | -                | -                | 1 (0.218) |     0.44 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           12 |     3427 | 2024-02-14 | Virtus.pro        | L   | 0.214      | -            | -                | -                | -         |    -2.17 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           11 |     3436 | 2024-02-14 | BetBoom           | W   | 0.212      | -            | -                | -                | 1 (0.212) |     3.69 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|           10 |     3507 | 2024-02-09 | 3DMAX             | L   | 0.180      | -            | -                | -                | -         |    -5.07 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            9 |     3512 | 2024-02-09 | ex-Sprout         | L   | 0.179      | -            | -                | -                | -         |    -5.64 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            8 |     3515 | 2024-02-09 | Endpoint          | W   | 0.179      | -            | -                | -                | -         |     0.11 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            7 |     3696 | 2024-01-30 | Insilio           | L   | 0.114      | -            | -                | -                | -         |    -3.50 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            6 |     3702 | 2024-01-30 | 500               | W   | 0.113      | -            | -                | -                | -         |     0.02 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            5 |     3890 | 2024-01-20 | Gaimin Gladiators | W   | 0.047      | -            | -                | -                | -         |     0.09 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            4 |     3897 | 2024-01-20 | Virtus.pro        | L   | 0.046      | -            | -                | -                | -         |    -0.48 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            3 |     3960 | 2024-01-19 | BIG               | W   | 0.039      | -            | -                | -                | -         |     0.28 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            2 |     4002 | 2024-01-18 | SINNERS           | W   | 0.034      | -            | -                | -                | -         |     0.06 | afro, bodyy, KRIMZ, kyuubii, MATYS |
|            1 |     4014 | 2024-01-18 | SAW               | L   | 0.033      | -            | -                | -                | -         |    -0.92 | afro, bodyy, KRIMZ, kyuubii, MATYS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($77,063.43)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-09 |      0.987 | $20,000.00     | $19,731.64      |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-05-04 |      0.747 | $2,000.00      | $1,493.13       |
| 2024-05-02 |      0.733 | $3,500.00      | $2,567.10       |
| 2024-03-06 |      0.353 | $50,000.00     | $17,672.57      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
