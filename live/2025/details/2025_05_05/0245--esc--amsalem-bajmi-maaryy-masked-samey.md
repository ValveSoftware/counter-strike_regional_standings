### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [245](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  532.9<br />
<br />
Final Rank Value (532.9) = Starting Rank Value (504.4) + Head To Head Adjustments (28.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.058 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 504.4


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
|           10 |     1577 | 2025-02-28 | Tricked           | L   | 0.758      | -            | -                | -                | -         |    -3.55 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |     1646 | 2025-02-25 | OG                | L   | 0.740      | -            | -                | -                | -         |    -2.28 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |     1679 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.732      | 0.143        | 0.015 (0.002)    | 0.915 (0.096)    | 0 (0.000) |    21.05 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |     1701 | 2025-02-23 | RUSH B            | L   | 0.727      | -            | -                | -                | -         |    -4.89 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |     1723 | 2025-02-22 | Fire Flux         | L   | 0.721      | -            | -                | -                | -         |    -3.58 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |     1742 | 2025-02-21 | Rebels            | W   | 0.714      | 0.143        | 0.000 (0.000)    | 0.104 (0.011)    | 0 (0.000) |    14.45 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |     2478 | 2024-12-23 | WOPA              | L   | 0.312      | -            | -                | -                | -         |    -2.76 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            3 |     2491 | 2024-12-22 | Astralis Talent   | W   | 0.306      | 0.333        | 0.000 (0.000)    | 0.105 (0.011)    | 0 (0.000) |     6.07 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |     2529 | 2024-12-19 | ENCE Academy      | L   | 0.285      | -            | -                | -                | -         |    -2.29 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            1 |     2539 | 2024-12-18 | WOPA              | W   | 0.279      | 0.333        | 0.008 (0.001)    | 0.206 (0.019)    | 0 (0.000) |     6.26 | AMSALEM, maaryy, mASKED, mhL, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
