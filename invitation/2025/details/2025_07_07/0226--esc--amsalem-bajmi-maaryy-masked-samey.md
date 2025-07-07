### Roster Details<br />
Team Name: ESC<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [226](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  528.1<br />
<br />
Final Rank Value (528.1) = Starting Rank Value (514.9) + Head To Head Adjustments (13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 514.9


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
|            6 |     2938 | 2025-02-28 | Tricked           | L   | 0.338      | -            | -                | -                | -         |    -0.80 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |     3040 | 2025-02-25 | OG                | L   | 0.320      | -            | -                | -                | -         |    -0.54 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |     3080 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.312      | 0.143        | 0.153 (0.007)    | 0.961 (0.043)    | 0 (0.000) |     9.75 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |     3102 | 2025-02-23 | TPuDCATb TPu      | L   | 0.307      | -            | -                | -                | -         |    -1.53 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |     3124 | 2025-02-22 | Fire Flux         | L   | 0.301      | -            | -                | -                | -         |    -1.35 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |     3143 | 2025-02-21 | Rebels            | W   | 0.294      | 0.143        | 0.007 (0.000)    | 0.259 (0.011)    | 0 (0.000) |     7.69 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
