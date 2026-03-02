### Roster Details<br />
Team Name: VRSoholics<br />
Roster: AdrieN, bnox, maaryy, Markoś, mASKED<br />
Global Rank: [283](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [171]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  527.7<br />
<br />
Final Rank Value (527.7) = Starting Rank Value (509.0) + Head To Head Adjustments (18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.0
- 400 + ( ( 0.058 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 509.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3085 | 2025-11-03 | Nexus      | L   | 0.407      | -            | -                | -                | -         |    -0.81 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            7 |     3152 | 2025-11-01 | CPH Wolves | W   | 0.392      | 0.435        | 0.001 (0.000)    | 0.335 (0.057)    | 0 (0.000) |     9.48 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            6 |     3192 | 2025-10-30 | NOVAQ      | L   | 0.379      | -            | -                | -                | -         |    -0.49 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            5 |     3223 | 2025-10-28 | FAVBET     | L   | 0.368      | -            | -                | -                | -         |    -0.84 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            4 |     3558 | 2025-10-20 | kONO       | L   | 0.313      | -            | -                | -                | -         |    -1.75 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            3 |     3572 | 2025-10-19 | RUBY       | W   | 0.306      | 0.384        | 0.021 (0.002)    | 0.196 (0.023)    | 0 (0.000) |     8.30 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            2 |     3653 | 2025-10-16 | ALLINNERS  | W   | 0.286      | 0.384        | 0.003 (0.000)    | 0.145 (0.016)    | 0 (0.000) |     6.49 | AdrieN, bnox, maaryy, Markoś, mASKED |
|            1 |     3687 | 2025-10-15 | Fire Flux  | L   | 0.280      | -            | -                | -                | -         |    -1.63 | AdrieN, bnox, maaryy, mASKED, mhL    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
