### Roster Details<br />
Team Name: Dewa United<br />
Roster: klipp, marsyy, neorah, RiseN, Whis<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  518.7<br />
<br />
Final Rank Value (518.7) = Starting Rank Value (542.2) + Head To Head Adjustments (-23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.2
- 400 + ( ( 0.070 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 542.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      549 | 2024-06-04 | The QUBE       | L   | 1.000      | -            | -                | -                | -         |    -9.36 | klipp, marsyy, neorah, RiseN, Whis |
|            9 |     1844 | 2024-04-17 | Sheer Conquer  | L   | 0.787      | -            | -                | -                | -         |   -13.74 | klipp, marsyy, neorah, RiseN, Whis |
|            8 |     3739 | 2024-01-21 | Trouble makers | L   | 0.207      | -            | -                | -                | -         |    -3.77 | Hatred, klipp, neorah, RiseN, Whis |
|            7 |     3778 | 2024-01-20 | 2ez            | W   | 0.201      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.01 | Hatred, klipp, neorah, RiseN, Whis |
|            6 |     3830 | 2024-01-19 | MAG            | L   | 0.194      | -            | -                | -                | -         |    -3.38 | Hatred, klipp, neorah, RiseN, Whis |
|            5 |     3839 | 2024-01-19 | Trouble makers | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     2.54 | Hatred, klipp, neorah, RiseN, Whis |
|            4 |     3930 | 2024-01-17 | SR Nacague     | W   | 0.182      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.81 | Hatred, klipp, neorah, RiseN, Whis |
|            3 |     3939 | 2024-01-17 | MAG            | L   | 0.181      | -            | -                | -                | -         |    -3.17 | Hatred, klipp, neorah, RiseN, Whis |
|            2 |     3944 | 2024-01-17 | 2ez            | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.77 | Hatred, klipp, neorah, RiseN, Whis |
|            1 |     3949 | 2024-01-17 | Moon           | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.76 | Hatred, klipp, neorah, RiseN, Whis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
