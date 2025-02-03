### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [175](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [111]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  651.0<br />
<br />
Final Rank Value (651.0) = Starting Rank Value (645.5) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.5
- 400 + ( ( 0.127 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 645.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2887 | 2024-09-10 | Sampi           | L   | 0.225      | -            | -                | -                | -         |    -1.25 | Burmylov, Neityu, PR, TOBIZ, xelex |
|           14 |     2904 | 2024-09-09 | ECLOT           | L   | 0.219      | -            | -                | -                | -         |    -0.24 | Burmylov, Neityu, PR, sirah, TOBIZ |
|           13 |     2912 | 2024-09-08 | ZEROvariant     | W   | 0.214      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.32 | Burmylov, Neityu, PR, sirah, TOBIZ |
|           12 |     3004 | 2024-09-05 | HOTU            | L   | 0.194      | -            | -                | -                | -         |    -2.57 | Burmylov, Neityu, PR, sirah, TOBIZ |
|           11 |     3210 | 2024-08-29 | TSM             | W   | 0.146      | 0.384        | 0.030 (0.002)    | 0.329 (0.018)    | 0 (0.000) |     3.38 | Burmylov, Neityu, PR, sirah, TOBIZ |
|           10 |     3250 | 2024-08-28 | Monte           | L   | 0.140      | -            | -                | -                | -         |    -0.52 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            9 |     3330 | 2024-08-27 | ALTERNATE aTTaX | L   | 0.131      | -            | -                | -                | -         |    -0.40 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            8 |     3365 | 2024-08-26 | CYBERSHOKE      | W   | 0.127      | 0.435        | 0.016 (0.001)    | 0.565 (0.031)    | 0 (0.000) |     2.85 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            7 |     3593 | 2024-08-21 | moneyF          | W   | 0.091      | 0.384        | 0.005 (0.000)    | 0.639 (0.022)    | 0 (0.000) |     2.15 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            6 |     3693 | 2024-08-17 | GUN5            | L   | 0.067      | -            | -                | -                | -         |    -0.21 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            5 |     3704 | 2024-08-17 | RUSTEC          | W   | 0.066      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.42 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            4 |     3760 | 2024-08-15 | CYBERSHOKE      | L   | 0.052      | -            | -                | -                | -         |    -0.48 | Burmylov, Neityu, PR, sirah, TMB   |
|            3 |     3782 | 2024-08-14 | kONO            | W   | 0.045      | 0.384        | 0.048 (0.001)    | 0.600 (0.010)    | 0 (0.000) |     1.13 | Burmylov, Neityu, PR, sirah, TMB   |
|            2 |     3936 | 2024-08-09 | Endpoint        | L   | 0.012      | -            | -                | -                | -         |    -0.11 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            1 |     3965 | 2024-08-08 | AMKAL           | W   | 0.005      | 0.426        | 0.040 (0.000)    | 0.274 (0.001)    | 0 (0.000) |     0.12 | Burmylov, Neityu, PR, sirah, TOBIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($407.52)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.254 | $500.00        | $126.79         |
| 2024-08-28 |      0.140 | $2,000.00      | $280.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
