### Roster Details<br />
Team Name: 9INE<br />
Roster: hypex, KukuBambo, nawrot, Sterzig, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  568.4<br />
<br />
Final Rank Value (568.4) = Starting Rank Value (537.7) + Head To Head Adjustments (30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.7
- 400 + ( ( 0.064 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 537.7


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
|           12 |      346 | 2024-06-15 | FAVBET        | L   | 0.987      | -            | -                | -                | -         |    -4.51 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           11 |      381 | 2024-06-14 | EYEBALLERS    | L   | 0.981      | -            | -                | -                | -         |    -3.92 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           10 |      417 | 2024-06-13 | Permitta      | W   | 0.975      | 0.143        | 0.039 (0.005)    | 0.794 (0.111)    | 0 (0.000) |    27.73 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            9 |      455 | 2024-06-12 | Zero Tenacity | L   | 0.967      | -            | -                | -                | -         |    -1.19 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            8 |      473 | 2024-06-11 | Verdant       | W   | 0.961      | 0.143        | 0.013 (0.002)    | 0.316 (0.043)    | 0 (0.000) |    26.02 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            7 |     1415 | 2024-05-15 | EYEBALLERS    | L   | 0.779      | -            | -                | -                | -         |    -2.44 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            6 |     1993 | 2024-04-20 | System5       | L   | 0.613      | -            | -                | -                | -         |    -5.28 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            5 |     2516 | 2024-04-03 | KOI           | L   | 0.501      | -            | -                | -                | -         |    -0.41 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            4 |     2527 | 2024-04-03 | 9 Pandas      | L   | 0.500      | -            | -                | -                | -         |    -0.58 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            3 |     2613 | 2024-03-28 | TSM           | L   | 0.461      | -            | -                | -                | -         |    -3.55 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            2 |     3090 | 2024-03-06 | EYEBALLERS    | L   | 0.315      | -            | -                | -                | -         |    -0.94 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            1 |     3263 | 2024-02-27 | Sangal        | L   | 0.261      | -            | -                | -                | -         |    -0.24 | KEi, KukuBambo, mynio, nawrot, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
