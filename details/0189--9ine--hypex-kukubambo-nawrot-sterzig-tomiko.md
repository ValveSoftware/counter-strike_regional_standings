### Roster Details<br />
Team Name: 9INE<br />
Roster: hypex, KukuBambo, nawrot, Sterzig, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  556.2<br />
<br />
Final Rank Value (556.2) = Starting Rank Value (531.7) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.7
- 400 + ( ( 0.065 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 531.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       46 | 2024-06-15 | FAVBET        | L   | 1.000      | -            | -                | -                | -         |    -4.37 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           11 |       81 | 2024-06-14 | EYEBALLERS    | L   | 1.000      | -            | -                | -                | -         |    -3.86 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           10 |      117 | 2024-06-13 | Permitta      | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.885 (0.126)    | 0 (0.000) |    28.63 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            9 |      155 | 2024-06-12 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -1.14 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            8 |      173 | 2024-06-11 | Verdant       | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.308 (0.044)    | 0 (0.000) |    27.10 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            7 |     1117 | 2024-05-15 | EYEBALLERS    | L   | 0.975      | -            | -                | -                | -         |    -2.86 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            6 |     1695 | 2024-04-20 | System5       | L   | 0.808      | -            | -                | -                | -         |   -11.19 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            5 |     2218 | 2024-04-03 | KOI           | L   | 0.696      | -            | -                | -                | -         |    -0.58 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            4 |     2229 | 2024-04-03 | 9 Pandas      | L   | 0.695      | -            | -                | -                | -         |    -0.59 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            3 |     2316 | 2024-03-28 | TSM           | L   | 0.656      | -            | -                | -                | -         |    -4.60 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            2 |     2793 | 2024-03-06 | EYEBALLERS    | L   | 0.510      | -            | -                | -                | -         |    -1.57 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            1 |     2966 | 2024-02-27 | Sangal        | L   | 0.456      | -            | -                | -                | -         |    -0.44 | KEi, KukuBambo, mynio, nawrot, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
