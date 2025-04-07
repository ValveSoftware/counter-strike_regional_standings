### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [236](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  542.1<br />
<br />
Final Rank Value (542.1) = Starting Rank Value (514.7) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.7
- 400 + ( ( 0.062 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 514.7


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
|           10 |      943 | 2025-02-28 | Tricked           | L   | 0.945      | -            | -                | -                | -         |   -13.70 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |      988 | 2025-02-25 | OG                | L   | 0.927      | -            | -                | -                | -         |    -2.64 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |     1015 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.919      | 0.143        | 0.000 (0.000)    | 0.851 (0.112)    | 0 (0.000) |    20.46 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |     1037 | 2025-02-23 | RUSH B            | L   | 0.914      | -            | -                | -                | -         |    -5.17 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |     1059 | 2025-02-22 | Fire Flux         | L   | 0.908      | -            | -                | -                | -         |    -4.49 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |     1078 | 2025-02-21 | Rebels            | W   | 0.901      | 0.143        | 0.002 (0.000)    | 0.175 (0.023)    | 0 (0.000) |    19.09 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |     1726 | 2024-12-23 | WOPA              | L   | 0.499      | -            | -                | -                | -         |    -3.60 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            3 |     1739 | 2024-12-22 | Astralis Talent   | W   | 0.493      | 0.333        | 0.002 (0.000)    | 0.220 (0.036)    | 0 (0.000) |    10.30 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |     1777 | 2024-12-19 | ENCE Academy      | L   | 0.472      | -            | -                | -                | -         |    -4.04 | AMSALEM, maaryy, mASKED, mhL, tomiko     |
|            1 |     1787 | 2024-12-18 | WOPA              | W   | 0.465      | 0.333        | 0.021 (0.003)    | 0.357 (0.055)    | 0 (0.000) |    11.19 | AMSALEM, maaryy, mASKED, mhL, tomiko     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
