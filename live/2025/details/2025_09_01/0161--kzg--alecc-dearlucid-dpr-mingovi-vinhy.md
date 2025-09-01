### Roster Details<br />
Team Name: KZG<br />
Roster: alecc, dearlucid, dpr, Mingovi, vinhy<br />
Global Rank: [161](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  658.6<br />
<br />
Final Rank Value (658.6) = Starting Rank Value (648.2) + Head To Head Adjustments (10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.2
- 400 + ( ( 0.129 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 648.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      947 | 2025-07-17 | SemperFi    | L   | 0.892      | -            | -                | -                | -         |    -9.81 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            6 |      950 | 2025-07-16 | Rooster     | L   | 0.890      | -            | -                | -                | -         |   -11.79 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            5 |      998 | 2025-07-15 | Ground Zero | W   | 0.879      | 0.314        | 0.002 (0.001)    | 0.135 (0.037)    | 0 (0.000) |    12.83 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            4 |     1040 | 2025-07-12 | SemperFi    | W   | 0.864      | 0.314        | 0.012 (0.003)    | 0.420 (0.114)    | 0 (0.000) |    17.42 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            3 |     1098 | 2025-07-11 | Underground | W   | 0.852      | 0.314        | 0.000 (0.000)    | 0.051 (0.014)    | 0 (0.000) |    10.61 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            2 |     1117 | 2025-07-10 | DOG         | W   | 0.846      | 0.314        | 0.000 (0.000)    | 0.050 (0.013)    | 0 (0.000) |     5.39 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            1 |     1167 | 2025-07-08 | FURY        | L   | 0.832      | -            | -                | -                | -         |   -14.26 | alecc, dearlucid, dpr, Mingovi, vinhy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($882.79)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      0.898 | $983.00        | $882.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
