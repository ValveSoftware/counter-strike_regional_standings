### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, Lich, mello, pedrinzy, prt<br />
Global Rank: [152](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [39]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  720.1<br />
<br />
Final Rank Value (720.1) = Starting Rank Value (671.4) + Head To Head Adjustments (48.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 671.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       14 | 2024-12-17 | 2070              | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.207 (0.030)    | 0 (0.000) |    12.26 | abr, Lich, mello, pedrinzy, prt      |
|           13 |       35 | 2024-12-15 | BeBold            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     6.74 | abr, Lich, mello, pedrinzy, prt      |
|           12 |       91 | 2024-12-13 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -17.40 | abr, Lich, mello, pedrinzy, prt      |
|           11 |      400 | 2024-11-28 | Dusty Roots       | L   | 1.000      | -            | -                | -                | -         |   -12.25 | cerolzin, Lich, mello, pedrinzy, prt |
|           10 |      431 | 2024-11-25 | JOGA DE TERNO     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.155 (0.057)    | 0 (0.000) |    10.63 | cerolzin, Lich, mello, pedrinzy, prt |
|            9 |      467 | 2024-11-23 | Tropa do Taco     | L   | 1.000      | -            | -                | -                | -         |   -12.60 | cerolzin, Lich, mello, pedrinzy, prt |
|            8 |      529 | 2024-11-21 | 2070              | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.207 (0.077)    | 0 (0.000) |    11.96 | cerolzin, Lich, mello, pedrinzy, prt |
|            7 |      578 | 2024-11-18 | VELOX             | W   | 0.999      | 0.371        | 0.000 (0.000)    | 0.160 (0.059)    | 0 (0.000) |     8.08 | abr, Lich, mello, pedrinzy, prt      |
|            6 |      840 | 2024-11-08 | Sharks            | L   | 0.934      | -            | -                | -                | -         |    -2.39 | abr, Lich, mello, pedrinzy, prt      |
|            5 |      874 | 2024-11-06 | Bad News Chickens | W   | 0.921      | 0.371        | 0.007 (0.002)    | 0.143 (0.049)    | 0 (0.000) |    13.91 | abr, Lich, mello, pedrinzy, prt      |
|            4 |      971 | 2024-11-01 | JOGA DE TERNO     | W   | 0.889      | 0.371        | 0.000 (0.000)    | 0.155 (0.051)    | 0 (0.000) |    11.23 | abr, Lich, mello, pedrinzy, prt      |
|            3 |     1000 | 2024-10-31 | Players           | W   | 0.880      | 0.371        | 0.010 (0.003)    | 0.348 (0.114)    | 0 (0.000) |    14.77 | abr, Lich, mello, pedrinzy, prt      |
|            2 |     1053 | 2024-10-28 | Patins da Ferrari | W   | 0.861      | 0.371        | 0.003 (0.001)    | 0.206 (0.066)    | 0 (0.000) |    13.39 | abr, Lich, mello, pedrinzy, prt      |
|            1 |     1819 | 2024-09-27 | Bad News Chickens | L   | 0.654      | -            | -                | -                | -         |    -9.68 | abr, Lich, mello, pedrinzy, prt      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($706.65)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
