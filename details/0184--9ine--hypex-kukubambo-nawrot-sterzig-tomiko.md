### Roster Details<br />
Team Name: 9INE<br />
Roster: hypex, KukuBambo, nawrot, Sterzig, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  567.7<br />
<br />
Final Rank Value (567.7) = Starting Rank Value (536.3) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.3
- 400 + ( ( 0.065 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 536.3


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
|           12 |      182 | 2024-06-15 | FAVBET        | L   | 1.000      | -            | -                | -                | -         |    -4.64 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           11 |      217 | 2024-06-14 | EYEBALLERS    | L   | 1.000      | -            | -                | -                | -         |    -3.95 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|           10 |      253 | 2024-06-13 | Permitta      | W   | 1.000      | 0.143        | 0.038 (0.005)    | 0.837 (0.120)    | 0 (0.000) |    28.49 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            9 |      291 | 2024-06-12 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -1.22 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            8 |      309 | 2024-06-11 | Verdant       | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.327 (0.047)    | 0 (0.000) |    27.02 | hypex, KukuBambo, nawrot, Sterzig, tomiko |
|            7 |     1251 | 2024-05-15 | EYEBALLERS    | L   | 0.819      | -            | -                | -                | -         |    -2.53 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            6 |     1829 | 2024-04-20 | System5       | L   | 0.653      | -            | -                | -                | -         |    -5.65 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            5 |     2352 | 2024-04-03 | KOI           | L   | 0.540      | -            | -                | -                | -         |    -0.46 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            4 |     2363 | 2024-04-03 | 9 Pandas      | L   | 0.539      | -            | -                | -                | -         |    -0.59 | hypex, KukuBambo, Sterzig, tomiko, zEden  |
|            3 |     2449 | 2024-03-28 | TSM           | L   | 0.501      | -            | -                | -                | -         |    -3.75 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            2 |     2926 | 2024-03-06 | EYEBALLERS    | L   | 0.354      | -            | -                | -                | -         |    -1.06 | KEi, KukuBambo, mynio, nawrot, tomiko     |
|            1 |     3099 | 2024-02-27 | Sangal        | L   | 0.301      | -            | -                | -                | -         |    -0.27 | KEi, KukuBambo, mynio, nawrot, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
