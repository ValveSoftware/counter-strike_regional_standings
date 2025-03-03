### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [245](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [140]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  577.3<br />
<br />
Final Rank Value (577.3) = Starting Rank Value (534.0) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.0
- 400 + ( ( 0.070 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 534.0


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
|           10 |       25 | 2025-02-28 | Tricked           | L   | 1.000      | -            | -                | -                | -         |    -6.02 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |       53 | 2025-02-25 | OG                | L   | 1.000      | -            | -                | -                | -         |    -4.20 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |       80 | 2025-02-24 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.474 (0.068)    | 0 (0.000) |    19.77 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |      102 | 2025-02-23 | RUSH B            | L   | 1.000      | -            | -                | -                | -         |    -6.38 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |      124 | 2025-02-22 | Fire Flux         | L   | 1.000      | -            | -                | -                | -         |    -4.71 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |      143 | 2025-02-21 | Rebels            | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.309 (0.044)    | 0 (0.000) |    21.57 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |      791 | 2024-12-23 | WOPA              | L   | 0.732      | -            | -                | -                | -         |    -4.59 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            3 |      804 | 2024-12-22 | Astralis Talent   | W   | 0.726      | 0.333        | 0.002 (0.001)    | 0.406 (0.098)    | 0 (0.000) |    15.45 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |      842 | 2024-12-19 | ENCE Academy      | L   | 0.705      | -            | -                | -                | -         |    -5.02 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            1 |      852 | 2024-12-18 | WOPA              | W   | 0.698      | 0.333        | 0.028 (0.007)    | 0.517 (0.120)    | 0 (0.000) |    17.43 | AMSALEM, maaryy, mASKED, mhL, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
