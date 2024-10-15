### Roster Details<br />
Team Name: WW<br />
Roster: Aunkere, ct0m, Jerry, StRoGo, tried<br />
Global Rank: [176](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [112]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  642.4<br />
<br />
Final Rank Value (642.4) = Starting Rank Value (560.3) + Head To Head Adjustments (82.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.3
- 400 + ( ( 0.082 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 560.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      144 | 2024-10-08 | ECLOT      | L   | 1.000      | -            | -                | -                | -         |    -3.92 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           14 |      300 | 2024-10-03 | Insilio    | W   | 1.000      | 0.143        | 0.038 (0.005)    | 0.690 (0.099)    | 0 (0.000) |    27.09 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           13 |      423 | 2024-09-29 | Monte Gen  | L   | 1.000      | -            | -                | -                | -         |    -3.80 | Aunkere, ct0m, kelieN, StRoGo, tried |
|           12 |      518 | 2024-09-27 | Endpoint   | W   | 1.000      | 0.435        | 0.052 (0.023)    | 0.590 (0.257)    | 0 (0.000) |    26.89 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           11 |      621 | 2024-09-25 | Passion UA | L   | 1.000      | -            | -                | -                | -         |    -3.39 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           10 |      698 | 2024-09-23 | FAVBET     | L   | 1.000      | -            | -                | -                | -         |    -4.18 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            9 |      728 | 2024-09-22 | HOTU       | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.435 (0.062)    | 0 (0.000) |    24.69 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            8 |      832 | 2024-09-18 | K27        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.220 (0.031)    | 0 (0.000) |    19.87 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            7 |      867 | 2024-09-17 | GR         | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.127 (0.018)    | 0 (0.000) |    21.52 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            6 |      887 | 2024-09-16 | CYBERSHOKE | L   | 1.000      | -            | -                | -                | -         |    -2.33 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            5 |      891 | 2024-09-16 | BOGATYRI   | W   | 1.000      | 0.443        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.60 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            4 |      895 | 2024-09-16 | CYBERSHOKE | L   | 1.000      | -            | -                | -                | -         |    -2.15 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            3 |     1090 | 2024-09-10 | Rhyno      | L   | 0.966      | -            | -                | -                | -         |    -4.47 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            2 |     1108 | 2024-09-09 | TALON      | L   | 0.959      | -            | -                | -                | -         |    -9.94 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            1 |     1952 | 2024-08-15 | QUAZAR     | L   | 0.794      | -            | -                | -                | -         |   -13.39 | Aunkere, ct0m, Jerry, StRoGo, tried  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
