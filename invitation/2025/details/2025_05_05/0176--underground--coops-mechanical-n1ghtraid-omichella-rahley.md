### Roster Details<br />
Team Name: Underground<br />
Roster: coops, Mechanical, N1ghtraid, Omichella, rahley<br />
Global Rank: [176](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [31]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  613.8<br />
<br />
Final Rank Value (613.8) = Starting Rank Value (637.1) + Head To Head Adjustments (-23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.1
- 400 + ( ( 0.131 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 637.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      537 | 2025-04-03 | Only One Word        | W   | 0.985      | 0.333        | 0.003 (0.001)    | 0.327 (0.107)    | 0 (0.000) |    19.36 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|           13 |      540 | 2025-04-03 | Only One Word        | W   | 0.985      | 0.333        | 0.003 (0.001)    | 0.327 (0.107)    | 0 (0.000) |    20.95 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|           12 |      571 | 2025-04-02 | Mindfreak            | L   | 0.979      | -            | -                | -                | -         |    -8.59 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|           11 |      575 | 2025-04-02 | Mindfreak            | L   | 0.978      | -            | -                | -                | -         |    -9.21 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|           10 |      871 | 2025-03-26 | MANTRA               | L   | 0.932      | -            | -                | -                | -         |   -12.31 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            9 |      875 | 2025-03-26 | MANTRA               | L   | 0.932      | -            | -                | -                | -         |   -13.34 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            8 |     1630 | 2025-02-26 | KZG                  | L   | 0.745      | -            | -                | -                | -         |   -10.91 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            7 |     1634 | 2025-02-26 | KZG                  | L   | 0.745      | -            | -                | -                | -         |   -11.65 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            6 |     1791 | 2025-02-19 | Rooster              | W   | 0.699      | 0.333        | 0.014 (0.003)    | 0.485 (0.113)    | 0 (0.000) |    17.52 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            5 |     1795 | 2025-02-19 | Rooster              | L   | 0.698      | -            | -                | -                | -         |    -4.36 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            4 |     2293 | 2025-01-28 | Housebets            | L   | 0.552      | -            | -                | -                | -         |    -4.50 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            3 |     2297 | 2025-01-28 | Housebets            | L   | 0.552      | -            | -                | -                | -         |    -4.67 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            2 |     2365 | 2025-01-22 | Justice For Tomorrow | W   | 0.512      | 0.333        | 0.001 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     7.37 | coops, Mechanical, N1ghtraid, Omichella, rahley |
|            1 |     2368 | 2025-01-22 | Justice For Tomorrow | L   | 0.512      | -            | -                | -                | -         |    -8.97 | coops, Mechanical, N1ghtraid, Omichella, rahley |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $450.00        | $450.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
