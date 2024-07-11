### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: alexer, maxxkor, OwensinhoM, tom1jed, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  739.7<br />
<br />
Final Rank Value (739.7) = Starting Rank Value (767.0) + Head To Head Adjustments (-27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 767.0
- 400 + ( ( 0.174 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 767.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      106 | 2024-06-28 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           12 |      117 | 2024-06-26 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -12.14 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           11 |      137 | 2024-06-17 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -6.89 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           10 |      458 | 2024-06-08 | paiN              | L   | 0.979      | -            | -                | -                | -         |    -0.64 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            9 |      551 | 2024-06-06 | Vikings KR        | W   | 0.967      | 0.371        | 0.012 (0.004)    | 0.432 (0.155)    | 0 (0.000) |    14.88 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            8 |      612 | 2024-06-05 | LA RUGONETA       | W   | 0.961      | 0.284        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.961) |     7.30 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            7 |      714 | 2024-06-02 | 9z Academy        | W   | 0.941      | 0.371        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     3.72 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            6 |      784 | 2024-05-31 | FURIA Academy     | W   | 0.927      | 0.371        | 0.000 (0.000)    | 0.075 (0.026)    | 0 (0.000) |     6.63 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            5 |      828 | 2024-05-29 | Case              | L   | 0.915      | -            | -                | -                | -         |    -8.84 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            4 |      887 | 2024-05-27 | Galorys           | L   | 0.899      | -            | -                | -                | -         |    -9.34 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            3 |     3363 | 2024-02-16 | FURIA Academy     | L   | 0.227      | -            | -                | -                | -         |    -5.62 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            2 |     3479 | 2024-02-12 | Case              | L   | 0.200      | -            | -                | -                | -         |    -2.08 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            1 |     4148 | 2024-01-15 | paiN              | L   | 0.015      | -            | -                | -                | -         |    -0.01 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,467.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      1.000 | $545.00        | $545.00         |
| 2024-06-05 |      0.961 | $2,000.00      | $1,922.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
