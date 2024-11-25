### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [7](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1634.7<br />
<br />
Final Rank Value (1634.7) = Starting Rank Value (1651.0) + Head To Head Adjustments (-16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.674[<sup>1</sup>](#table2)
- Bounty Collected: 0.579[<sup>2</sup>](#table1)
- Opponent Network: 0.253[<sup>2</sup>](#table1)
- LAN Wins: 0.994[<sup>2</sup>](#table1)

The average of these factors is 0.625<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1651.0
- 400 + ( ( 0.625 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1651.0


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
|           39 |      127 | 2024-11-19 | Cloud9            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.68 | broky, frozen, karrigan, rain, ropz |
|           38 |      129 | 2024-11-19 | fnatic            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.46 | broky, frozen, karrigan, rain, ropz |
|           37 |      140 | 2024-11-18 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -7.76 | broky, frozen, karrigan, rain, ropz |
|           36 |      155 | 2024-11-17 | Falcons           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.39 | broky, frozen, karrigan, rain, ropz |
|           35 |      170 | 2024-11-16 | Cloud9            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.99 | broky, frozen, karrigan, rain, ropz |
|           34 |      544 | 2024-11-01 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -6.85 | broky, frozen, karrigan, rain, ropz |
|           33 |      572 | 2024-10-31 | Natus Vincere     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.540 (0.540)    | 1 (1.000) |    25.75 | broky, frozen, karrigan, rain, ropz |
|           32 |      592 | 2024-10-30 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -11.98 | broky, frozen, karrigan, rain, ropz |
|           31 |      979 | 2024-10-09 | MOUZ              | L   | 0.889      | -            | -                | -                | -         |   -12.56 | broky, frozen, karrigan, rain, ropz |
|           30 |     1016 | 2024-10-08 | Liquid            | W   | 0.882      | 0.624        | 0.211 (0.116)    | 0.299 (0.164)    | 1 (0.882) |    11.59 | broky, frozen, karrigan, rain, ropz |
|           29 |     1040 | 2024-10-07 | paiN              | W   | 0.876      | 0.624        | 0.199 (0.109)    | 0.703 (0.384)    | 1 (0.876) |     7.80 | broky, frozen, karrigan, rain, ropz |
|           28 |     1051 | 2024-10-07 | FURIA             | L   | 0.874      | -            | -                | -                | -         |   -16.47 | broky, frozen, karrigan, rain, ropz |
|           27 |     1338 | 2024-09-28 | Natus Vincere     | L   | 0.816      | -            | -                | -                | -         |    -3.81 | broky, frozen, karrigan, rain, ropz |
|           26 |     1389 | 2024-09-27 | Liquid            | W   | 0.808      | 0.729        | 0.211 (0.124)    | 0.299 (0.176)    | 1 (0.808) |    10.71 | broky, frozen, karrigan, rain, ropz |
|           25 |     1451 | 2024-09-26 | Falcons           | W   | 0.800      | 0.729        | 0.114 (0.066)    | 0.272 (0.159)    | 1 (0.800) |     3.03 | broky, frozen, karrigan, rain, ropz |
|           24 |     1497 | 2024-09-25 | G2                | L   | 0.794      | -            | -                | -                | -         |    -3.11 | broky, frozen, karrigan, rain, ropz |
|           23 |     1751 | 2024-09-17 | Complexity        | L   | 0.742      | -            | -                | -                | -         |   -15.62 | broky, frozen, karrigan, rain, ropz |
|           22 |     2067 | 2024-09-06 | Sangal            | W   | 0.667      | 0.889        | 0.174 (0.103)    | 0.477 (0.283)    | 1 (0.667) |     5.49 | broky, frozen, karrigan, rain, ropz |
|           21 |     2086 | 2024-09-05 | Ninjas in Pyjamas | W   | 0.662      | 0.889        | -                | 0.313 (0.184)    | -         |     2.24 | broky, frozen, karrigan, rain, ropz |
|           20 |     2138 | 2024-09-04 | FlyQuest          | W   | 0.654      | 0.889        | 0.143 (0.083)    | 0.467 (0.271)    | -         |     3.11 | broky, frozen, karrigan, rain, ropz |
|           19 |     2172 | 2024-09-03 | Sangal            | L   | 0.648      | -            | -                | -                | -         |   -15.57 | broky, frozen, karrigan, rain, ropz |
|           18 |     2523 | 2024-08-25 | OG                | W   | 0.588      | -            | -                | -                | -         |     0.64 | broky, frozen, karrigan, rain, ropz |
|           17 |     2543 | 2024-08-24 | paiN              | W   | 0.582      | 0.535        | 0.199 (0.062)    | 0.703 (0.219)    | -         |     6.76 | broky, frozen, karrigan, rain, ropz |
|           16 |     2647 | 2024-08-21 | Rare Atom         | W   | 0.561      | -            | -                | -                | -         |     0.31 | broky, frozen, karrigan, rain, ropz |
|           15 |     2808 | 2024-08-16 | SAW               | L   | 0.528      | -            | -                | -                | -         |    -8.49 | broky, frozen, karrigan, rain, ropz |
|           14 |     2890 | 2024-08-13 | Liquid            | W   | 0.508      | 1.000        | 0.211 (0.107)    | -                | -         |     6.26 | broky, frozen, karrigan, rain, ropz |
|           13 |     2903 | 2024-08-13 | Falcons           | W   | 0.507      | -            | -                | -                | -         |     1.54 | broky, frozen, karrigan, rain, ropz |
|           12 |     2947 | 2024-08-12 | Vitality          | L   | 0.501      | -            | -                | -                | -         |    -3.62 | broky, frozen, karrigan, rain, ropz |
|           11 |     2999 | 2024-08-10 | Liquid            | W   | 0.487      | 1.000        | 0.211 (0.103)    | -                | -         |     5.89 | broky, frozen, karrigan, rain, ropz |
|           10 |     3264 | 2024-08-02 | Ninjas in Pyjamas | L   | 0.434      | -            | -                | -                | -         |   -12.06 | broky, frozen, karrigan, rain, ropz |
|            9 |     3316 | 2024-08-01 | G2                | L   | 0.426      | -            | -                | -                | -         |    -1.66 | broky, frozen, karrigan, rain, ropz |
|            8 |     3364 | 2024-07-31 | Cloud9            | W   | 0.420      | -            | -                | -                | -         |     0.43 | broky, frozen, karrigan, rain, ropz |
|            7 |     3732 | 2024-07-19 | Natus Vincere     | L   | 0.342      | -            | -                | -                | -         |    -2.13 | broky, frozen, karrigan, rain, ropz |
|            6 |     3879 | 2024-07-17 | FlyQuest          | W   | 0.327      | 1.000        | -                | 0.467 (0.153)    | -         |     1.49 | broky, frozen, karrigan, rain, ropz |
|            5 |     4262 | 2024-06-14 | Vitality          | L   | 0.108      | -            | -                | -                | -         |    -0.81 | broky, frozen, karrigan, rain, ropz |
|            4 |     4303 | 2024-06-13 | Natus Vincere     | L   | 0.101      | -            | -                | -                | -         |    -0.63 | broky, frozen, karrigan, rain, ropz |
|            3 |     4335 | 2024-06-12 | SAW               | W   | 0.093      | -            | -                | -                | -         |     1.32 | broky, frozen, karrigan, rain, ropz |
|            2 |     4810 | 2024-05-31 | G2                | L   | 0.016      | -            | -                | -                | -         |    -0.06 | broky, frozen, karrigan, rain, ropz |
|            1 |     4866 | 2024-05-29 | Spirit            | L   | 0.002      | -            | -                | -                | -         |    -0.01 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($131,092.78)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $25,000.00     | $25,000.00      |
| 2024-10-13 |      0.915 | $6,000.00      | $5,492.39       |
| 2024-09-29 |      0.821 | $40,000.00     | $32,851.80      |
| 2024-09-22 |      0.775 | $17,500.00     | $13,567.93      |
| 2024-08-25 |      0.589 | $20,000.00     | $11,770.15      |
| 2024-08-18 |      0.542 | $40,000.00     | $21,676.14      |
| 2024-08-04 |      0.447 | $8,500.00      | $3,803.51       |
| 2024-07-21 |      0.355 | $40,000.00     | $14,217.09      |
| 2024-06-16 |      0.121 | $20,000.00     | $2,424.08       |
| 2024-06-02 |      0.029 | $10,000.00     | $289.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
