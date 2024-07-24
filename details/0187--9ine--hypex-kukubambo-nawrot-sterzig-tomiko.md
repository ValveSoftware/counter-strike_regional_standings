### Roster Details<br />
Team Name: 9INE<br />
Roster: hypex, KukuBambo, nawrot, Sterzig, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  556.2<br />
<br />
Final Rank Value (556.2) = Starting Rank Value (528.6) + Head To Head Adjustments (27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 528.6


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
|           12 |      634 | 2024-06-15 | FAVBET        | L   | 0.940      | -            | -                | -                | -         |    -4.83 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           11 |      669 | 2024-06-14 | EYEBALLERS    | L   | 0.934      | -            | -                | -                | -         |    -4.13 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           10 |      705 | 2024-06-13 | Permitta      | W   | 0.927      | 0.143        | 0.032 (0.004)    | 0.790 (0.105)    | 0 (0.000) |    26.07 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            9 |      743 | 2024-06-12 | Zero Tenacity | L   | 0.920      | -            | -                | -                | -         |    -1.26 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            8 |      761 | 2024-06-11 | Verdant       | W   | 0.913      | 0.143        | 0.019 (0.002)    | 0.336 (0.044)    | 0 (0.000) |    25.63 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            7 |     1703 | 2024-05-15 | EYEBALLERS    | L   | 0.732      | -            | -                | -                | -         |    -2.62 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            6 |     2281 | 2024-04-20 | System5       | L   | 0.566      | -            | -                | -                | -         |    -5.22 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            5 |     2804 | 2024-04-03 | KOI           | L   | 0.454      | -            | -                | -                | -         |    -0.54 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            4 |     2815 | 2024-04-03 | 9 Pandas      | L   | 0.452      | -            | -                | -                | -         |    -0.71 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            3 |     2901 | 2024-03-28 | TSM           | L   | 0.414      | -            | -                | -                | -         |    -3.62 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            2 |     3378 | 2024-03-06 | EYEBALLERS    | L   | 0.267      | -            | -                | -                | -         |    -0.92 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            1 |     3551 | 2024-02-27 | Sangal        | L   | 0.214      | -            | -                | -                | -         |    -0.25 | KEi, KukuBambo, mynio, nawrot, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
