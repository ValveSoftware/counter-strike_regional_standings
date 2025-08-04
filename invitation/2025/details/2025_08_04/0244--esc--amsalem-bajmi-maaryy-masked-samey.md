### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [244](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  512.7<br />
<br />
Final Rank Value (512.7) = Starting Rank Value (509.3) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.3
- 400 + ( ( 0.058 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 509.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3465 | 2025-02-28 | Tricked           | L   | 0.152      | -            | -                | -                | -         |    -0.46 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |     3567 | 2025-02-25 | OG                | L   | 0.133      | -            | -                | -                | -         |    -2.17 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |     3607 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.125      | 0.143        | 0.192 (0.003)    | 0.904 (0.016)    | 0 (0.000) |     3.93 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |     3629 | 2025-02-23 | TPuDCATb TPu      | L   | 0.120      | -            | -                | -                | -         |    -0.56 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |     3651 | 2025-02-22 | Fire Flux         | L   | 0.114      | -            | -                | -                | -         |    -0.64 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |     3670 | 2025-02-21 | KOLESIE           | W   | 0.108      | 0.143        | 0.048 (0.001)    | 0.552 (0.008)    | 0 (0.000) |     3.30 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
