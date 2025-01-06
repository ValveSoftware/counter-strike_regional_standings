### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Global Rank: [8](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1705.0<br />
<br />
Final Rank Value (1705.0) = Starting Rank Value (1785.7) + Head To Head Adjustments (-80.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.922[<sup>1</sup>](#table2)
- Bounty Collected: 0.680[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.942[<sup>2</sup>](#table1)

The average of these factors is 0.701<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1785.7
- 400 + ( ( 0.701 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1785.7


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
|           44 |      195 | 2024-12-13 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.77 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           43 |      263 | 2024-12-08 | Natus Vincere     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.491 (0.491)    | 1 (1.000) |    18.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           42 |      292 | 2024-12-07 | Spirit            | L   | 0.999      | -            | -                | -                | -         |    -7.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           41 |      318 | 2024-12-06 | The MongolZ       | L   | 0.992      | -            | -                | -                | -         |    -9.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           40 |      337 | 2024-12-05 | FaZe              | W   | 0.986      | 1.000        | 0.920 (0.907)    | 0.498 (0.491)    | 1 (0.986) |    19.99 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      353 | 2024-12-04 | BIG               | W   | 0.984      | 1.000        | 0.243 (0.239)    | 0.475 (0.468)    | 1 (0.984) |     4.67 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      585 | 2024-11-23 | Passion UA        | W   | 0.905      | -            | -                | -                | 1 (0.905) |     1.26 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      619 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.897      | -            | -                | -                | 1 (0.897) |     1.02 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      628 | 2024-11-21 | BIG               | L   | 0.893      | -            | -                | -                | -         |   -24.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      643 | 2024-11-20 | PARIVISION        | W   | 0.891      | -            | -                | -                | 1 (0.891) |     0.43 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |     1023 | 2024-11-03 | The MongolZ       | L   | 0.774      | -            | -                | -                | -         |    -8.80 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |     1055 | 2024-11-02 | OG                | W   | 0.767      | 0.898        | 0.164 (0.113)    | 0.302 (0.208)    | 1 (0.767) |     0.40 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |     1201 | 2024-10-26 | fnatic            | W   | 0.720      | 0.477        | 0.189 (0.065)    | -                | -         |     1.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |     1246 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.702      | -            | -                | -                | -         |     0.68 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1252 | 2024-10-23 | Legacy            | W   | 0.699      | 0.477        | -                | 0.432 (0.144)    | -         |     0.68 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1279 | 2024-10-20 | ENCE              | L   | 0.681      | -            | -                | -                | -         |   -20.39 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1307 | 2024-10-19 | B8                | W   | 0.674      | 0.589        | 0.162 (0.064)    | 0.556 (0.221)    | 1 (0.674) |     0.94 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1368 | 2024-10-17 | ENCE              | W   | 0.660      | 0.589        | 0.324 (0.126)    | 0.327 (0.127)    | 1 (0.660) |     0.84 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1379 | 2024-10-17 | Rebels            | W   | 0.658      | -            | -                | -                | 1 (0.658) |     0.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1458 | 2024-10-12 | Natus Vincere     | L   | 0.627      | -            | -                | -                | -         |    -7.69 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1521 | 2024-10-09 | Vitality          | W   | 0.607      | 0.624        | 1.000 (0.379)    | 0.393 (0.149)    | -         |    12.48 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1558 | 2024-10-08 | Astralis          | W   | 0.601      | 0.624        | 0.316 (0.118)    | -                | -         |     1.79 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1584 | 2024-10-07 | G2                | W   | 0.593      | 0.624        | 1.000 (0.370)    | 0.443 (0.164)    | -         |    15.44 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     2267 | 2024-09-18 | MIBR              | L   | 0.466      | -            | -                | -                | -         |   -10.42 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     2301 | 2024-09-17 | Virtus.pro        | W   | 0.459      | 0.889        | -                | 0.340 (0.139)    | -         |     1.56 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     2544 | 2024-09-08 | Sangal            | W   | 0.400      | -            | -                | -                | -         |     0.91 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     2573 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.394      | -            | -                | -                | -         |     0.42 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2626 | 2024-09-05 | Sangal            | L   | 0.381      | -            | -                | -                | -         |   -11.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2670 | 2024-09-04 | Lynn Vision       | W   | 0.374      | -            | -                | -                | -         |     0.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2707 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.367      | -            | -                | -                | -         |   -11.22 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2834 | 2024-08-29 | Eternal Fire      | L   | 0.333      | -            | -                | -                | -         |    -9.18 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2867 | 2024-08-28 | paiN              | L   | 0.328      | -            | -                | -                | -         |    -8.13 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2881 | 2024-08-28 | Falcons           | W   | 0.326      | -            | -                | -                | -         |     0.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2927 | 2024-08-27 | fnatic            | W   | 0.321      | -            | -                | -                | -         |     0.37 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2941 | 2024-08-27 | 3DMAX             | W   | 0.320      | -            | -                | -                | -         |     1.39 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     2999 | 2024-08-26 | B8                | W   | 0.314      | -            | -                | -                | -         |     0.32 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     3017 | 2024-08-26 | Cloud9            | L   | 0.313      | -            | -                | -                | -         |    -9.65 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     3174 | 2024-08-21 | OG                | L   | 0.280      | -            | -                | -                | -         |    -8.74 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     3560 | 2024-08-09 | FURIA             | L   | 0.200      | -            | -                | -                | -         |    -4.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3581 | 2024-08-08 | 3DMAX             | W   | 0.193      | -            | -                | -                | -         |     0.83 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3633 | 2024-08-07 | MIBR              | L   | 0.186      | -            | -                | -                | -         |    -4.57 | kyxsan, NertZ, sjuush, TeSeS, Woro2k  |
|            3 |     3814 | 2024-08-02 | Complexity        | L   | 0.152      | -            | -                | -                | -         |    -4.38 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            2 |     3950 | 2024-07-30 | Spirit            | L   | 0.132      | -            | -                | -                | -         |    -0.97 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            1 |     3972 | 2024-07-29 | Complexity        | W   | 0.126      | -            | -                | -                | -         |     0.33 | kyxsan, NertZ, sAw, sjuush, TeSeS     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($218,310.61)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.82) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-11-03 |      0.774 | $150,000.00    | $116,148.58     |
| 2024-10-20 |      0.681 | $40,000.00     | $27,230.04      |
| 2024-10-13 |      0.635 | $20,000.00     | $12,690.34      |
| 2024-09-22 |      0.494 | $23,500.00     | $11,619.07      |
| 2024-09-01 |      0.353 | $5,000.00      | $1,762.89       |
| 2024-08-25 |      0.308 | $5,000.00      | $1,538.13       |
| 2024-08-09 |      0.201 | $4,500.00      | $905.56         |
| 2024-08-04 |      0.167 | $8,500.00      | $1,416.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
