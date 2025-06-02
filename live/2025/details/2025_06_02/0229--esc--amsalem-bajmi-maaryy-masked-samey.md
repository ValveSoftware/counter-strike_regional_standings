### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [229](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [121]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  547.1<br />
<br />
Final Rank Value (547.1) = Starting Rank Value (521.7) + Head To Head Adjustments (25.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.7
- 400 + ( ( 0.066 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 521.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2462 | 2025-02-28 | Tricked           | L   | 0.576      | -            | -                | -                | -         |    -1.27 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |     2564 | 2025-02-25 | OG                | L   | 0.558      | -            | -                | -                | -         |    -1.65 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |     2604 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.550      | 0.143        | 0.157 (0.012)    | 0.867 (0.068)    | 0 (0.000) |    17.06 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |     2626 | 2025-02-23 | RUSH B            | L   | 0.545      | -            | -                | -                | -         |    -2.32 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |     2648 | 2025-02-22 | Fire Flux         | L   | 0.539      | -            | -                | -                | -         |    -1.98 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |     2667 | 2025-02-21 | Rebels            | W   | 0.532      | 0.143        | 0.006 (0.000)    | 0.145 (0.011)    | 0 (0.000) |    13.40 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |     3569 | 2024-12-23 | WOPA              | L   | 0.130      | -            | -                | -                | -         |    -1.22 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            3 |     3582 | 2024-12-22 | Astralis Talent   | W   | 0.124      | 0.333        | 0.000 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     1.81 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |     3620 | 2024-12-19 | ENCE Academy      | L   | 0.103      | -            | -                | -                | -         |    -0.51 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            1 |     3630 | 2024-12-18 | WOPA              | W   | 0.096      | 0.333        | 0.002 (0.000)    | 0.117 (0.004)    | 0 (0.000) |     2.12 | AMSALEM, maaryy, mASKED, mhL, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
