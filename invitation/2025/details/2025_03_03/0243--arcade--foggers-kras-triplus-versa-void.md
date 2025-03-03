### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [243](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [31]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  578.4<br />
<br />
Final Rank Value (578.4) = Starting Rank Value (574.4) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.206[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.4
- 400 + ( ( 0.090 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 574.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2295 | 2024-10-09 | DXA      | L   | 0.232      | -            | -                | -                | -         |    -3.59 | foggers, Kras, TRIPLUS, versa, void |
|            5 |     2300 | 2024-10-09 | DXA      | W   | 0.231      | 0.333        | 0.000 (0.000)    | 0.033 (0.003)    | 0 (0.000) |     3.76 | foggers, Kras, TRIPLUS, versa, void |
|            4 |     2560 | 2024-10-02 | Vantage  | W   | 0.184      | 0.333        | 0.000 (0.000)    | 0.179 (0.011)    | 0 (0.000) |     2.24 | foggers, Kras, TRIPLUS, versa, void |
|            3 |     2561 | 2024-10-02 | Vantage  | W   | 0.184      | 0.333        | 0.000 (0.000)    | 0.179 (0.011)    | 0 (0.000) |     2.28 | foggers, Kras, TRIPLUS, versa, void |
|            2 |     2852 | 2024-09-25 | FlyQuest | L   | 0.138      | -            | -                | -                | -         |    -0.33 | foggers, Kras, TRIPLUS, versa, void |
|            1 |     2856 | 2024-09-25 | FlyQuest | L   | 0.138      | -            | -                | -                | -         |    -0.33 | foggers, Kras, TRIPLUS, versa, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45.59)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.304 | $150.00        | $45.59          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
