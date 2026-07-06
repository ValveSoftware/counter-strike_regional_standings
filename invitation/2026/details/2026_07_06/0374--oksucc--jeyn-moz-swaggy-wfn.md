### Roster Details<br />
Team Name: OKSUCC<br />
Roster: jeyN, moz, swaggy, wfn<br />
Global Rank: [374](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [232]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  413.4<br />
<br />
Final Rank Value (413.4) = Starting Rank Value (400.5) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      697 | 2026-05-29 | Dripmen          | L   | 0.948      | -            | -                | -                | -         |    -5.75 | jeyN, moz, N0R1, swaggy, wfn |
|            5 |      866 | 2026-05-25 | SSSghoul         | W   | 0.921      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.78 | jeyN, moz, N0R1, swaggy, wfn |
|            4 |     2846 | 2026-04-01 | ex-Zero Tenacity | L   | 0.559      | -            | -                | -                | -         |    -1.35 | jeyN, Mad, moz, swaggy, wfn  |
|            3 |     2934 | 2026-03-31 | IDoPieca         | W   | 0.553      | 0.384        | 0.000 (0.000)    | 0.054 (0.011)    | 0 (0.000) |    11.40 | jeyN, Mad, moz, swaggy, wfn  |
|            2 |     3076 | 2026-03-29 | RUSTEC           | L   | 0.540      | -            | -                | -                | -         |    -1.35 | jeyN, Mad, moz, swaggy, wfn  |
|            1 |     4463 | 2026-03-02 | CTRL             | L   | 0.362      | -            | -                | -                | -         |    -3.86 | jeyN, Mad, moz, swaggy, wfn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
