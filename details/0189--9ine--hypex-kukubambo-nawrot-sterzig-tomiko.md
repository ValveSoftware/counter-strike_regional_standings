### Roster Details<br />
Team Name: 9INE<br />
Roster: hypex, KukuBambo, nawrot, Sterzig, tomiko<br />
Global Rank: [189](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
<br />
Final Rank Value:  553.5<br />
<br />
Final Rank Value (553.5) = Starting Rank Value (526.9) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.9
- 400 + ( ( 0.061 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 526.9


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
|           12 |      876 | 2024-06-15 | FAVBET        | L   | 0.893      | -            | -                | -                | -         |    -4.74 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           11 |      911 | 2024-06-14 | EYEBALLERS    | L   | 0.886      | -            | -                | -                | -         |    -3.73 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           10 |      947 | 2024-06-13 | Permitta      | W   | 0.880      | 0.143        | 0.025 (0.003)    | 0.799 (0.100)    | 0 (0.000) |    24.69 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            9 |      985 | 2024-06-12 | Zero Tenacity | L   | 0.873      | -            | -                | -                | -         |    -1.14 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            8 |     1003 | 2024-06-11 | Verdant       | W   | 0.866      | 0.143        | 0.015 (0.002)    | 0.300 (0.037)    | 0 (0.000) |    24.30 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            7 |     1945 | 2024-05-15 | EYEBALLERS    | L   | 0.685      | -            | -                | -                | -         |    -2.41 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            6 |     2523 | 2024-04-20 | System5       | L   | 0.519      | -            | -                | -                | -         |    -4.87 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            5 |     3046 | 2024-04-03 | KOI           | L   | 0.406      | -            | -                | -                | -         |    -0.50 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            4 |     3057 | 2024-04-03 | 9 Pandas      | L   | 0.405      | -            | -                | -                | -         |    -0.74 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            3 |     3143 | 2024-03-28 | TSM           | L   | 0.366      | -            | -                | -                | -         |    -3.38 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            2 |     3620 | 2024-03-06 | EYEBALLERS    | L   | 0.220      | -            | -                | -                | -         |    -0.73 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            1 |     3793 | 2024-02-27 | Sangal        | L   | 0.167      | -            | -                | -                | -         |    -0.15 | KEi, KukuBambo, mynio, nawrot, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
