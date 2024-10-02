### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [8](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [8]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1644.3<br />
<br />
Final Rank Value (1644.3) = Starting Rank Value (1680.8) + Head To Head Adjustments (-36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.786[<sup>1</sup>](#table2)
- Bounty Collected: 0.606[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.952[<sup>2</sup>](#table1)

The average of these factors is 0.669<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1680.8
- 400 + ( ( 0.669 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1680.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      134 | 2024-09-28 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -3.73 | broky, frozen, karrigan, rain, ropz |
|           42 |      185 | 2024-09-27 | Liquid            | W   | 1.000      | 0.729        | 0.410 (0.299)    | 0.357 (0.261)    | 1 (1.000) |    17.19 | broky, frozen, karrigan, rain, ropz |
|           41 |      247 | 2024-09-26 | Falcons           | W   | 1.000      | 0.729        | 0.274 (0.200)    | 0.411 (0.300)    | 1 (1.000) |     6.18 | broky, frozen, karrigan, rain, ropz |
|           40 |      293 | 2024-09-25 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.18 | broky, frozen, karrigan, rain, ropz |
|           39 |      547 | 2024-09-17 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -18.57 | broky, frozen, karrigan, rain, ropz |
|           38 |      863 | 2024-09-06 | Sangal            | W   | 1.000      | 0.889        | 0.218 (0.194)    | 0.645 (0.573)    | 1 (1.000) |     4.77 | broky, frozen, karrigan, rain, ropz |
|           37 |      882 | 2024-09-05 | Ninjas in Pyjamas | W   | 1.000      | 0.889        | 0.159 (0.142)    | 0.287 (0.255)    | 1 (1.000) |     2.85 | broky, frozen, karrigan, rain, ropz |
|           36 |      934 | 2024-09-04 | FlyQuest          | W   | 1.000      | 0.889        | -                | 0.356 (0.316)    | 1 (1.000) |     0.70 | broky, frozen, karrigan, rain, ropz |
|           35 |      968 | 2024-09-03 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -27.47 | broky, frozen, karrigan, rain, ropz |
|           34 |     1319 | 2024-08-25 | OG                | W   | 0.946      | -            | -                | -                | -         |     0.60 | broky, frozen, karrigan, rain, ropz |
|           33 |     1339 | 2024-08-24 | paiN              | W   | 0.940      | 0.535        | 0.298 (0.150)    | 0.839 (0.422)    | -         |     9.16 | broky, frozen, karrigan, rain, ropz |
|           32 |     1443 | 2024-08-21 | Rare Atom         | W   | 0.919      | -            | -                | -                | -         |     0.34 | broky, frozen, karrigan, rain, ropz |
|           31 |     1604 | 2024-08-16 | SAW               | L   | 0.886      | -            | -                | -                | -         |   -22.99 | broky, frozen, karrigan, rain, ropz |
|           30 |     1686 | 2024-08-13 | Liquid            | W   | 0.867      | 1.000        | 0.410 (0.355)    | 0.357 (0.310)    | 1 (0.867) |    14.44 | broky, frozen, karrigan, rain, ropz |
|           29 |     1699 | 2024-08-13 | Falcons           | W   | 0.865      | 1.000        | 0.274 (0.237)    | 0.411 (0.355)    | 1 (0.865) |     5.67 | broky, frozen, karrigan, rain, ropz |
|           28 |     1743 | 2024-08-12 | Vitality          | L   | 0.859      | -            | -                | -                | -         |    -6.76 | broky, frozen, karrigan, rain, ropz |
|           27 |     1795 | 2024-08-10 | Liquid            | W   | 0.845      | 1.000        | 0.410 (0.346)    | 0.357 (0.302)    | 1 (0.845) |    14.42 | broky, frozen, karrigan, rain, ropz |
|           26 |     2060 | 2024-08-02 | Ninjas in Pyjamas | L   | 0.792      | -            | -                | -                | -         |   -22.14 | broky, frozen, karrigan, rain, ropz |
|           25 |     2112 | 2024-08-01 | G2                | L   | 0.785      | -            | -                | -                | -         |    -4.54 | broky, frozen, karrigan, rain, ropz |
|           24 |     2160 | 2024-07-31 | Cloud9            | W   | 0.778      | -            | -                | -                | 1 (0.778) |     0.34 | broky, frozen, karrigan, rain, ropz |
|           23 |     2528 | 2024-07-19 | Natus Vincere     | L   | 0.700      | -            | -                | -                | -         |    -3.66 | broky, frozen, karrigan, rain, ropz |
|           22 |     2675 | 2024-07-17 | FlyQuest          | W   | 0.685      | 1.000        | -                | 0.356 (0.244)    | 1 (0.685) |     0.34 | broky, frozen, karrigan, rain, ropz |
|           21 |     3058 | 2024-06-14 | Vitality          | L   | 0.466      | -            | -                | -                | -         |    -3.84 | broky, frozen, karrigan, rain, ropz |
|           20 |     3099 | 2024-06-13 | Natus Vincere     | L   | 0.459      | -            | -                | -                | -         |    -2.44 | broky, frozen, karrigan, rain, ropz |
|           19 |     3131 | 2024-06-12 | SAW               | W   | 0.451      | -            | -                | -                | -         |     1.60 | broky, frozen, karrigan, rain, ropz |
|           18 |     3606 | 2024-05-31 | G2                | L   | 0.374      | -            | -                | -                | -         |    -2.35 | broky, frozen, karrigan, rain, ropz |
|           17 |     3662 | 2024-05-29 | Spirit            | L   | 0.360      | -            | -                | -                | -         |    -2.55 | broky, frozen, karrigan, rain, ropz |
|           16 |     3683 | 2024-05-28 | Virtus.pro        | W   | 0.354      | -            | -                | -                | -         |     3.28 | broky, frozen, karrigan, rain, ropz |
|           15 |     3708 | 2024-05-27 | M80               | W   | 0.347      | -            | -                | -                | -         |     1.01 | broky, frozen, karrigan, rain, ropz |
|           14 |     4233 | 2024-05-10 | Vitality          | L   | 0.233      | -            | -                | -                | -         |    -1.90 | broky, frozen, karrigan, rain, ropz |
|           13 |     4275 | 2024-05-08 | Natus Vincere     | W   | 0.220      | 0.889        | 1.000 (0.196)    | -                | -         |     5.89 | broky, frozen, karrigan, rain, ropz |
|           12 |     4292 | 2024-05-07 | Monte             | W   | 0.213      | -            | -                | -                | -         |     0.07 | broky, frozen, karrigan, rain, ropz |
|           11 |     4524 | 2024-04-26 | Eternal Fire      | W   | 0.140      | 0.889        | 0.974 (0.121)    | -                | -         |     3.27 | broky, frozen, karrigan, rain, ropz |
|           10 |     4553 | 2024-04-25 | Virtus.pro        | W   | 0.133      | -            | -                | -                | -         |     1.27 | broky, frozen, karrigan, rain, ropz |
|            9 |     4572 | 2024-04-24 | Astralis          | L   | 0.126      | -            | -                | -                | -         |    -3.40 | broky, frozen, karrigan, rain, ropz |
|            8 |     4590 | 2024-04-23 | Imperial          | W   | 0.120      | -            | -                | -                | -         |     0.18 | broky, frozen, karrigan, rain, ropz |
|            7 |     4865 | 2024-04-14 | MOUZ              | W   | 0.058      | -            | -                | -                | -         |     1.21 | broky, frozen, karrigan, rain, ropz |
|            6 |     4879 | 2024-04-13 | Astralis          | W   | 0.051      | -            | -                | -                | -         |     0.23 | broky, frozen, karrigan, rain, ropz |
|            5 |     4892 | 2024-04-12 | Liquid            | W   | 0.045      | -            | -                | -                | -         |     0.62 | broky, frozen, karrigan, rain, ropz |
|            4 |     4967 | 2024-04-10 | FlyQuest          | W   | 0.031      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz |
|            3 |     4982 | 2024-04-10 | Cloud9            | W   | 0.030      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz |
|            2 |     5028 | 2024-04-09 | Astralis          | L   | 0.024      | -            | -                | -                | -         |    -0.65 | broky, frozen, karrigan, rain, ropz |
|            1 |     5059 | 2024-04-08 | Nemiga            | W   | 0.017      | -            | -                | -                | -         |     0.02 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($174,925.60)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.53) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-09-22 |      1.000 | $17,500.00     | $17,500.00      |
| 2024-08-25 |      0.947 | $20,000.00     | $18,932.07      |
| 2024-08-18 |      0.900 | $40,000.00     | $35,999.98      |
| 2024-08-04 |      0.806 | $8,500.00      | $6,847.33       |
| 2024-07-21 |      0.714 | $40,000.00     | $28,540.93      |
| 2024-06-16 |      0.479 | $20,000.00     | $9,586.00       |
| 2024-06-02 |      0.387 | $10,000.00     | $3,870.64       |
| 2024-05-12 |      0.246 | $32,000.00     | $7,869.32       |
| 2024-04-14 |      0.058 | $100,000.00    | $5,779.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
