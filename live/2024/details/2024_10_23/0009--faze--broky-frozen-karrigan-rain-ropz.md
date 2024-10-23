### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [9](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [8]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1683.3<br />
<br />
Final Rank Value (1683.3) = Starting Rank Value (1717.4) + Head To Head Adjustments (-34.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.798[<sup>1</sup>](#table2)
- Bounty Collected: 0.617[<sup>2</sup>](#table1)
- Opponent Network: 0.305[<sup>2</sup>](#table1)
- LAN Wins: 0.970[<sup>2</sup>](#table1)

The average of these factors is 0.672<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1717.4
- 400 + ( ( 0.672 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1717.4


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
|           36 |      270 | 2024-10-09 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -11.02 | broky, frozen, karrigan, rain, ropz |
|           35 |      307 | 2024-10-08 | Liquid            | W   | 1.000      | 0.624        | 0.416 (0.260)    | -                | 1 (1.000) |    16.02 | broky, frozen, karrigan, rain, ropz |
|           34 |      331 | 2024-10-07 | paiN              | W   | 1.000      | 0.624        | 0.345 (0.215)    | 0.759 (0.473)    | 1 (1.000) |     7.28 | broky, frozen, karrigan, rain, ropz |
|           33 |      342 | 2024-10-07 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -16.57 | broky, frozen, karrigan, rain, ropz |
|           32 |      629 | 2024-09-28 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -4.06 | broky, frozen, karrigan, rain, ropz |
|           31 |      680 | 2024-09-27 | Liquid            | W   | 1.000      | 0.729        | 0.416 (0.304)    | 0.298 (0.217)    | 1 (1.000) |    16.54 | broky, frozen, karrigan, rain, ropz |
|           30 |      742 | 2024-09-26 | Falcons           | W   | 1.000      | 0.729        | 0.264 (0.192)    | 0.340 (0.248)    | 1 (1.000) |     5.56 | broky, frozen, karrigan, rain, ropz |
|           29 |      788 | 2024-09-25 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.82 | broky, frozen, karrigan, rain, ropz |
|           28 |     1042 | 2024-09-17 | Complexity        | L   | 0.960      | -            | -                | -                | -         |   -17.86 | broky, frozen, karrigan, rain, ropz |
|           27 |     1358 | 2024-09-06 | Sangal            | W   | 0.886      | 0.889        | 0.354 (0.279)    | 0.636 (0.500)    | 1 (0.886) |     7.53 | broky, frozen, karrigan, rain, ropz |
|           26 |     1377 | 2024-09-05 | Ninjas in Pyjamas | W   | 0.880      | -            | -                | -                | 1 (0.880) |     1.95 | broky, frozen, karrigan, rain, ropz |
|           25 |     1429 | 2024-09-04 | FlyQuest          | W   | 0.872      | 0.889        | 0.266 (0.206)    | 0.464 (0.359)    | 1 (0.872) |     2.45 | broky, frozen, karrigan, rain, ropz |
|           24 |     1463 | 2024-09-03 | Sangal            | L   | 0.866      | -            | -                | -                | -         |   -20.66 | broky, frozen, karrigan, rain, ropz |
|           23 |     1814 | 2024-08-25 | OG                | W   | 0.806      | -            | -                | -                | -         |     0.43 | broky, frozen, karrigan, rain, ropz |
|           22 |     1834 | 2024-08-24 | paiN              | W   | 0.800      | 0.535        | 0.345 (0.147)    | 0.759 (0.324)    | -         |     7.68 | broky, frozen, karrigan, rain, ropz |
|           21 |     1938 | 2024-08-21 | Rare Atom         | W   | 0.779      | -            | -                | -                | -         |     0.24 | broky, frozen, karrigan, rain, ropz |
|           20 |     2099 | 2024-08-16 | SAW               | L   | 0.746      | -            | -                | -                | -         |   -18.28 | broky, frozen, karrigan, rain, ropz |
|           19 |     2181 | 2024-08-13 | Liquid            | W   | 0.727      | 1.000        | 0.416 (0.303)    | 0.298 (0.216)    | 1 (0.727) |    11.71 | broky, frozen, karrigan, rain, ropz |
|           18 |     2194 | 2024-08-13 | Falcons           | W   | 0.725      | 1.000        | 0.264 (0.191)    | 0.340 (0.247)    | 1 (0.725) |     3.69 | broky, frozen, karrigan, rain, ropz |
|           17 |     2238 | 2024-08-12 | Vitality          | L   | 0.719      | -            | -                | -                | -         |    -5.94 | broky, frozen, karrigan, rain, ropz |
|           16 |     2290 | 2024-08-10 | Liquid            | W   | 0.705      | 1.000        | 0.416 (0.293)    | 0.298 (0.210)    | 1 (0.705) |    11.42 | broky, frozen, karrigan, rain, ropz |
|           15 |     2555 | 2024-08-02 | Ninjas in Pyjamas | L   | 0.653      | -            | -                | -                | -         |   -18.90 | broky, frozen, karrigan, rain, ropz |
|           14 |     2607 | 2024-08-01 | G2                | L   | 0.645      | -            | -                | -                | -         |    -4.12 | broky, frozen, karrigan, rain, ropz |
|           13 |     2655 | 2024-07-31 | Cloud9            | W   | 0.638      | -            | -                | -                | -         |     0.25 | broky, frozen, karrigan, rain, ropz |
|           12 |     3023 | 2024-07-19 | Natus Vincere     | L   | 0.560      | -            | -                | -                | -         |    -3.17 | broky, frozen, karrigan, rain, ropz |
|           11 |     3170 | 2024-07-17 | FlyQuest          | W   | 0.545      | 1.000        | -                | 0.464 (0.253)    | -         |     1.33 | broky, frozen, karrigan, rain, ropz |
|           10 |     3553 | 2024-06-14 | Vitality          | L   | 0.326      | -            | -                | -                | -         |    -2.84 | broky, frozen, karrigan, rain, ropz |
|            9 |     3594 | 2024-06-13 | Natus Vincere     | L   | 0.319      | -            | -                | -                | -         |    -1.84 | broky, frozen, karrigan, rain, ropz |
|            8 |     3626 | 2024-06-12 | SAW               | W   | 0.311      | -            | -                | -                | -         |     1.55 | broky, frozen, karrigan, rain, ropz |
|            7 |     4101 | 2024-05-31 | G2                | L   | 0.234      | -            | -                | -                | -         |    -1.60 | broky, frozen, karrigan, rain, ropz |
|            6 |     4157 | 2024-05-29 | Spirit            | L   | 0.221      | -            | -                | -                | -         |    -1.82 | broky, frozen, karrigan, rain, ropz |
|            5 |     4178 | 2024-05-28 | Virtus.pro        | W   | 0.214      | -            | -                | -                | -         |     2.69 | broky, frozen, karrigan, rain, ropz |
|            4 |     4203 | 2024-05-27 | M80               | W   | 0.207      | -            | -                | -                | -         |     0.79 | broky, frozen, karrigan, rain, ropz |
|            3 |     4728 | 2024-05-10 | Vitality          | L   | 0.093      | -            | -                | -                | -         |    -0.81 | broky, frozen, karrigan, rain, ropz |
|            2 |     4770 | 2024-05-08 | Natus Vincere     | W   | 0.080      | -            | -                | -                | -         |     2.09 | broky, frozen, karrigan, rain, ropz |
|            1 |     4787 | 2024-05-07 | Monte             | W   | 0.073      | -            | -                | -                | -         |     0.01 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151,175.82)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.56) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-09-29 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-09-22 |      0.993 | $17,500.00     | $17,386.00      |
| 2024-08-25 |      0.807 | $20,000.00     | $16,133.66      |
| 2024-08-18 |      0.760 | $40,000.00     | $30,403.16      |
| 2024-08-04 |      0.666 | $8,500.00      | $5,658.00       |
| 2024-07-21 |      0.574 | $40,000.00     | $22,944.11      |
| 2024-06-16 |      0.339 | $20,000.00     | $6,787.59       |
| 2024-06-02 |      0.247 | $10,000.00     | $2,471.43       |
| 2024-05-12 |      0.106 | $32,000.00     | $3,391.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
