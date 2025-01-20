### Roster Details<br />
Team Name: Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [8](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1721.1<br />
<br />
Final Rank Value (1721.1) = Starting Rank Value (1787.7) + Head To Head Adjustments (-66.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.945[<sup>1</sup>](#table2)
- Bounty Collected: 0.668[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.938[<sup>2</sup>](#table1)

The average of these factors is 0.700<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1787.7
- 400 + ( ( 0.700 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1787.7


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
|           41 |       17 | 2025-01-15 | ENCE              | W   | 1.000      | -            | -                | -                | -         |     1.55 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           40 |      263 | 2024-12-13 | G2                | L   | 0.969      | -            | -                | -                | -         |    -6.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      331 | 2024-12-08 | Natus Vincere     | W   | 0.936      | 1.000        | 1.000 (0.936)    | 0.526 (0.492)    | 1 (0.936) |    15.52 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      360 | 2024-12-07 | Spirit            | L   | 0.930      | -            | -                | -                | -         |    -7.36 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      386 | 2024-12-06 | The MongolZ       | L   | 0.923      | -            | -                | -                | -         |    -9.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      405 | 2024-12-05 | FaZe              | W   | 0.917      | 1.000        | 1.000 (0.917)    | 0.553 (0.507)    | 1 (0.917) |    18.72 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      421 | 2024-12-04 | BIG               | W   | 0.915      | 1.000        | 0.257 (0.236)    | 0.491 (0.450)    | 1 (0.915) |     3.88 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |      653 | 2024-11-23 | Passion UA        | W   | 0.836      | -            | -                | -                | 1 (0.836) |     1.03 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |      687 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.828      | -            | -                | -                | 1 (0.828) |     0.78 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |      696 | 2024-11-21 | BIG               | L   | 0.824      | -            | -                | -                | -         |   -23.04 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |      711 | 2024-11-20 | PARIVISION        | W   | 0.822      | -            | -                | -                | 1 (0.822) |     0.30 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1091 | 2024-11-03 | The MongolZ       | L   | 0.706      | -            | -                | -                | -         |    -8.60 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1123 | 2024-11-02 | OG                | W   | 0.699      | 0.898        | 0.171 (0.107)    | 0.289 (0.181)    | 1 (0.699) |     0.30 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1269 | 2024-10-26 | fnatic            | W   | 0.651      | 0.477        | 0.183 (0.057)    | -                | -         |     0.75 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1314 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.633      | -            | -                | -                | -         |     0.50 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1320 | 2024-10-23 | Legacy            | W   | 0.630      | 0.477        | -                | 0.503 (0.151)    | -         |     0.54 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1347 | 2024-10-20 | ENCE              | L   | 0.612      | -            | -                | -                | -         |   -18.47 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1375 | 2024-10-19 | B8                | W   | 0.606      | 0.589        | 0.164 (0.059)    | 0.504 (0.180)    | 1 (0.606) |     0.71 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1436 | 2024-10-17 | ENCE              | W   | 0.591      | 0.589        | 0.338 (0.118)    | -                | 1 (0.591) |     0.65 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1447 | 2024-10-17 | Rebels            | W   | 0.590      | 0.589        | -                | 0.336 (0.117)    | 1 (0.590) |     0.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     1526 | 2024-10-12 | Natus Vincere     | L   | 0.558      | -            | -                | -                | -         |    -7.95 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     1589 | 2024-10-09 | Vitality          | W   | 0.539      | 0.624        | 0.972 (0.327)    | 0.440 (0.148)    | -         |     9.99 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     1626 | 2024-10-08 | Astralis          | W   | 0.532      | 0.624        | 0.328 (0.109)    | -                | -         |     1.30 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     1652 | 2024-10-07 | G2                | W   | 0.525      | 0.624        | 1.000 (0.328)    | 0.442 (0.145)    | -         |    13.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2335 | 2024-09-18 | MIBR              | L   | 0.397      | -            | -                | -                | -         |    -9.31 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2369 | 2024-09-17 | Virtus.pro        | W   | 0.390      | 0.889        | -                | 0.381 (0.132)    | -         |     1.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2612 | 2024-09-08 | HEROIC            | W   | 0.331      | -            | -                | -                | -         |     0.55 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2641 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.325      | -            | -                | -                | -         |     0.28 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2694 | 2024-09-05 | HEROIC            | L   | 0.312      | -            | -                | -                | -         |    -9.38 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2738 | 2024-09-04 | Lynn Vision       | W   | 0.306      | -            | -                | -                | -         |     0.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2775 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.298      | -            | -                | -                | -         |    -9.18 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2902 | 2024-08-29 | Eternal Fire      | L   | 0.264      | -            | -                | -                | -         |    -7.57 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     2935 | 2024-08-28 | paiN              | L   | 0.259      | -            | -                | -                | -         |    -6.70 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     2949 | 2024-08-28 | Falcons           | W   | 0.258      | -            | -                | -                | -         |     0.11 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     2995 | 2024-08-27 | fnatic            | W   | 0.252      | -            | -                | -                | -         |     0.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     3009 | 2024-08-27 | 3DMAX             | W   | 0.251      | -            | -                | -                | -         |     0.91 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3067 | 2024-08-26 | B8                | W   | 0.246      | -            | -                | -                | -         |     0.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3085 | 2024-08-26 | Cloud9            | L   | 0.244      | -            | -                | -                | -         |    -7.56 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     3242 | 2024-08-21 | OG                | L   | 0.212      | -            | -                | -                | -         |    -6.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     3628 | 2024-08-09 | FURIA             | L   | 0.132      | -            | -                | -                | -         |    -3.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     3649 | 2024-08-08 | 3DMAX             | W   | 0.125      | -            | -                | -                | -         |     0.45 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($199,142.00)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.87) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.984 | $45,000.00     | $44,258.09      |
| 2024-11-03 |      0.706 | $150,000.00    | $105,859.85     |
| 2024-10-20 |      0.612 | $40,000.00     | $24,486.38      |
| 2024-10-13 |      0.566 | $20,000.00     | $11,318.51      |
| 2024-09-22 |      0.426 | $23,500.00     | $10,007.16      |
| 2024-09-01 |      0.284 | $5,000.00      | $1,419.93       |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |
| 2024-08-09 |      0.133 | $4,500.00      | $596.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
