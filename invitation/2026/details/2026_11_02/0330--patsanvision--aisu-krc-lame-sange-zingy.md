### Roster Details<br />
Team Name: PATSANVISION<br />
Roster: Aisu, krc, LAME, Sange, ZinGY<br />
Global Rank: [330](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [218]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  510.0<br />
<br />
Final Rank Value (510.0) = Starting Rank Value (492.6) + Head To Head Adjustments (17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.6
- 400 + ( ( 0.049 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 492.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1919 | 2026-09-18 | LFO 9       | L   | 0.899      | -            | -                | -                | -         |   -12.74 | Aisu, krc, LAME, Sange, ZinGY |
|            4 |     1977 | 2026-09-17 | WXM         | W   | 0.893      | 0.270        | 0.002 (0.000)    | 0.027 (0.006)    | 0 (0.000) |    14.24 | Aisu, krc, LAME, Sange, ZinGY |
|            3 |     2020 | 2026-09-16 | XDM         | W   | 0.886      | 0.270        | 0.001 (0.000)    | 0.080 (0.019)    | 0 (0.000) |    18.73 | Aisu, krc, LAME, Sange, ZinGY |
|            2 |     2056 | 2026-09-15 | bLight blue | W   | 0.877      | 0.270        | 0.000 (0.000)    | 0.030 (0.007)    | 0 (0.000) |    13.41 | Aisu, krc, LAME, Sange, ZinGY |
|            1 |     2240 | 2026-09-11 | PRISONBREAK | L   | 0.851      | -            | -                | -                | -         |   -16.28 | Aisu, krc, LAME, Sange, ZinGY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
