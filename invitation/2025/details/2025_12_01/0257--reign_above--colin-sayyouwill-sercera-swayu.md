### Roster Details<br />
Team Name: Reign Above<br />
Roster: colin, SayYouWill, SeRCEra, swayu<br />
Global Rank: [257](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  520.0<br />
<br />
Final Rank Value (520.0) = Starting Rank Value (497.2) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 497.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      473 | 2025-11-09 | M80       | L   | 1.000      | -            | -                | -                | -         |    -0.26 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            4 |      487 | 2025-11-08 | Memeories | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 1 (1.000) |    12.93 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |      492 | 2025-11-08 | NRG       | L   | 1.000      | -            | -                | -                | -         |    -0.40 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |      499 | 2025-11-08 | Memeories | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 1 (1.000) |    13.18 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     2843 | 2025-09-06 | Sakura    | L   | 0.627      | -            | -                | -                | -         |    -2.62 | colin, enN, SayYouWill, SeRCEra, swayu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
