### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, ju1ces, Terryyy, TjP<br />
Global Rank: [259](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [31]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  639.0<br />
<br />
Final Rank Value (639.0) = Starting Rank Value (622.6) + Head To Head Adjustments (16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.6
- 400 + ( ( 0.114 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 622.6


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
|            9 |     4601 | 2025-11-13 | SemperFi    | L   | 0.239      | -            | -                | -                | -         |    -0.21 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            8 |     4636 | 2025-11-12 | Ground Zero | W   | 0.232      | 0.278        | 0.013 (0.001)    | 0.213 (0.014)    | 0 (0.000) |     6.46 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            7 |     4691 | 2025-11-10 | Mindfreak   | W   | 0.219      | 0.278        | 0.014 (0.001)    | 0.327 (0.020)    | 0 (0.000) |     6.02 | asap, chelleos, ju1ces, Terryyy, TjP  |
|            6 |     5299 | 2025-10-25 | Vantage     | W   | 0.112      | 0.278        | 0.000 (0.000)    | 0.031 (0.001)    | 0 (0.000) |     1.11 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            5 |     5366 | 2025-10-24 | FURY        | W   | 0.105      | 0.278        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     1.08 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            4 |     5411 | 2025-10-23 | Mindfreak   | L   | 0.099      | -            | -                | -                | -         |    -0.39 | asap, chelleos, jhd, ju1ces, Terryyy  |
|            3 |     5524 | 2025-10-17 | SemperFi    | L   | 0.059      | -            | -                | -                | -         |    -0.05 | asap, chelleos, sliimey, Terryyy, TjP |
|            2 |     5558 | 2025-10-16 | Mindfreak   | W   | 0.052      | 0.278        | 0.014 (0.000)    | 0.327 (0.005)    | 0 (0.000) |     1.44 | asap, chelleos, sliimey, Terryyy, TjP |
|            1 |     5625 | 2025-10-14 | Rooster     | W   | 0.038      | 0.278        | 0.006 (0.000)    | 0.229 (0.002)    | 0 (0.000) |     0.97 | asap, chelleos, sliimey, Terryyy, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($298.14)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-13 |      0.239 | $1,000.00      | $239.14         |
| 2025-10-17 |      0.059 | $1,000.00      | $59.00          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
