### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: land1n, mawth, RenanZin, tatazin, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  813.6<br />
<br />
Final Rank Value (813.6) = Starting Rank Value (754.9) + Head To Head Adjustments (58.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.9
- 400 + ( ( 0.168 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 754.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      143 | 2024-06-16 | OMiT             | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.332 (0.047)    | 0 (0.000) |    16.97 | land1n, mawth, RenanZin, tatazin, w1 |
|           17 |      171 | 2024-06-15 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.156 (0.022)    | 0 (0.000) |    11.20 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |      205 | 2024-06-14 | One More         | L   | 1.000      | -            | -                | -                | -         |   -20.26 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |      255 | 2024-06-13 | Carpe Diem       | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.245 (0.091)    | 0 (0.000) |    15.41 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |      280 | 2024-06-12 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.156 (0.022)    | 0 (0.000) |    11.98 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |      281 | 2024-06-12 | Limitless        | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.225 (0.032)    | 0 (0.000) |     9.80 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |      332 | 2024-06-10 | Strife           | W   | 0.994      | 0.371        | 0.013 (0.005)    | 0.156 (0.057)    | 0 (0.000) |    13.84 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |      357 | 2024-06-09 | OMiT             | L   | 0.989      | -            | -                | -                | -         |   -11.86 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |      419 | 2024-06-08 | straykids        | W   | 0.983      | 0.368        | 0.008 (0.003)    | 0.040 (0.014)    | 0 (0.000) |    12.20 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |      428 | 2024-06-08 | Akimbo           | W   | 0.981      | 0.371        | 0.005 (0.002)    | 0.097 (0.035)    | 0 (0.000) |    13.13 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |      475 | 2024-06-07 | Strife           | W   | 0.976      | 0.368        | 0.013 (0.005)    | 0.156 (0.056)    | 0 (0.000) |    15.87 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |      536 | 2024-06-06 | Snakes Den       | L   | 0.969      | -            | -                | -                | -         |   -22.51 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |      549 | 2024-06-06 | Party Astronauts | L   | 0.967      | -            | -                | -                | -         |    -5.60 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |      654 | 2024-06-04 | Legacy           | L   | 0.956      | -            | -                | -                | -         |    -4.22 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |      695 | 2024-06-03 | Perseverance     | W   | 0.948      | 0.371        | 0.000 (0.000)    | 0.079 (0.028)    | 0 (0.000) |     6.72 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |     1062 | 2024-05-20 | M80              | L   | 0.854      | -            | -                | -                | -         |    -1.52 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     3353 | 2024-02-16 | Mythic           | L   | 0.228      | -            | -                | -                | -         |    -2.49 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     4202 | 2024-01-13 | RED Canids       | L   | 0.002      | -            | -                | -                | -         |    -0.01 | land1n, RenanZin, tatazin, w1, watts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,036.09)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-06-10 |      0.996 | $3,300.00      | $3,286.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
