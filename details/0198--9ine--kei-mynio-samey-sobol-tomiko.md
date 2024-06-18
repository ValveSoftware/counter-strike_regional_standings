### Roster Details<br />
Team Name: 9INE<br />
Roster: KEi, mynio, SaMey, Sobol, tomiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  526.4<br />
<br />
Final Rank Value (526.4) = Starting Rank Value (525.2) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.2
- 400 + ( ( 0.062 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 525.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2849 | 2024-03-05 | ECLOT         | L   | 0.501      | -            | -                | -                | -         |    -0.32 | KEi, mynio, SaMey, Sobol, tomiko    |
|            9 |     2887 | 2024-03-03 | ILIN          | L   | 0.489      | -            | -                | -                | -         |    -8.22 | KEi, mynio, snatchie, Sobol, tomiko |
|            8 |     2932 | 2024-03-01 | Alliance      | W   | 0.475      | 0.371        | 0.018 (0.003)    | 0.432 (0.076)    | 0 (0.000) |    13.36 | KEi, mynio, SaMey, Sobol, tomiko    |
|            7 |     2996 | 2024-02-26 | Entropiq      | L   | 0.448      | -            | -                | -                | -         |    -5.19 | KEi, mynio, SaMey, Sobol, tomiko    |
|            6 |     3413 | 2024-02-06 | Alliance      | L   | 0.314      | -            | -                | -                | -         |    -1.20 | KEi, KukuBambo, mhL, mynio, tomiko  |
|            5 |     3552 | 2024-01-31 | BLEED         | L   | 0.274      | -            | -                | -                | -         |    -0.08 | KEi, KukuBambo, mhL, mynio, tomiko  |
|            4 |     3985 | 2024-01-16 | JANO          | L   | 0.176      | -            | -                | -                | -         |    -3.12 | KEi, KukuBambo, mhL, mynio, tomiko  |
|            3 |     4207 | 2024-01-09 | KOI           | L   | 0.130      | -            | -                | -                | -         |    -0.10 | KEi, KukuBambo, mhL, mynio, tomiko  |
|            2 |     4229 | 2024-01-09 | Zero Tenacity | W   | 0.129      | 0.143        | 0.153 (0.003)    | 1.000 (0.018)    | 0 (0.000) |     3.92 | KEi, KukuBambo, mhL, mynio, tomiko  |
|            1 |     4240 | 2024-01-09 | xGOD          | W   | 0.129      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.15 | KEi, KukuBambo, mhL, mynio, tomiko  |

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
