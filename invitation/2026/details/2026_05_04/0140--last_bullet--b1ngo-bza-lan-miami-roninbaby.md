### Roster Details<br />
Team Name: Last Bullet<br />
Roster: B1NGO, BZA, lan, Miami, Roninbaby<br />
Global Rank: [140](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [18]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  903.1<br />
<br />
Final Rank Value (903.1) = Starting Rank Value (970.6) + Head To Head Adjustments (-67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.601[<sup>2</sup>](#table1)

The average of these factors is 0.308<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 970.6
- 400 + ( ( 0.308 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 970.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       10 | 2026-05-03 | Rooster           | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.426 (0.061)    | 1 (1.000) |    11.05 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           29 |       29 | 2026-05-02 | Just Swing        | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.340 (0.049)    | 1 (1.000) |    13.10 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           28 |       41 | 2026-05-02 | BMZ               | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.371 (0.053)    | 1 (1.000) |    20.01 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           27 |       78 | 2026-05-01 | Alter Ego         | L   | 1.000      | -            | -                | -                | -         |   -12.80 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           26 |      102 | 2026-04-30 | Chaos             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.74 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           25 |      137 | 2026-04-29 | Just Swing        | L   | 1.000      | -            | -                | -                | -         |   -18.00 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           24 |      170 | 2026-04-28 | Alter Ego         | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.252 (0.084)    | 0 (0.000) |    17.80 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           23 |      208 | 2026-04-27 | Arise             | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.109 (0.036)    | 0 (0.000) |     7.28 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           22 |      262 | 2026-04-26 | BMZ               | L   | 1.000      | -            | -                | -                | -         |    -8.90 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           21 |      992 | 2026-04-03 | NEXVOID           | L   | 0.993      | -            | -                | -                | -         |    -6.93 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           20 |     1104 | 2026-04-02 | The QUBE          | L   | 0.986      | -            | -                | -                | -         |   -15.28 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           19 |     1116 | 2026-04-02 | Change The Game   | L   | 0.985      | -            | -                | -                | -         |   -17.09 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           18 |     1212 | 2026-04-01 | Chaos             | W   | 0.978      | 0.352        | 0.002 (0.001)    | -                | 1 (0.978) |     3.09 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           17 |     1375 | 2026-03-30 | Change The Game   | L   | 0.965      | -            | -                | -                | -         |   -17.92 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           16 |     1680 | 2026-03-25 | Rare Atom         | L   | 0.932      | -            | -                | -                | -         |    -8.36 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           15 |     1685 | 2026-03-24 | Just Swing        | W   | 0.929      | 0.284        | 0.003 (0.001)    | 0.340 (0.090)    | 1 (0.929) |    10.14 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           14 |     1739 | 2026-03-24 | Rare Atom         | L   | 0.924      | -            | -                | -                | -         |    -7.84 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           13 |     1844 | 2026-03-22 | Alter Ego         | L   | 0.913      | -            | -                | -                | -         |   -15.88 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           12 |     1911 | 2026-03-21 | Take Me Away      | W   | 0.906      | -            | -                | -                | 0 (0.000) |     1.27 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           11 |     1920 | 2026-03-21 | Rare Atom         | L   | 0.904      | -            | -                | -                | -         |    -7.69 | B1NGO, BZA, lan, Miami, Roninbaby    |
|           10 |     1970 | 2026-03-20 | BMZ               | L   | 0.899      | -            | -                | -                | -         |   -12.15 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            9 |     3167 | 2026-02-23 | Change The Game   | L   | 0.733      | -            | -                | -                | -         |   -14.52 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            8 |     3231 | 2026-02-22 | Kaleido           | L   | 0.726      | -            | -                | -                | -         |   -12.88 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            7 |     3341 | 2026-02-20 | Chinggis Warriors | W   | 0.713      | 0.333        | 0.022 (0.005)    | 0.543 (0.129)    | -         |    16.37 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            6 |     3444 | 2026-02-18 | BMZ               | W   | 0.700      | 0.333        | 0.013 (0.003)    | 0.371 (0.086)    | -         |    12.95 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            5 |     3531 | 2026-02-16 | 100RA             | W   | 0.691      | -            | -                | -                | -         |     0.90 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            4 |     4862 | 2025-12-28 | FengDa            | L   | 0.351      | -            | -                | -                | -         |    -8.11 | B1NGO, BZA, lan, Miami, Roninbaby    |
|            3 |     5673 | 2025-11-13 | Lynn Vision       | L   | 0.057      | -            | -                | -                | -         |    -0.49 | B1NGO, flying, lan, Miami, Roninbaby |
|            2 |     5818 | 2025-11-09 | EGG               | W   | 0.025      | 0.379        | -                | 0.000 (0.000)    | 1 (0.025) |     0.03 | B1NGO, flying, lan, Miami, Roninbaby |
|            1 |     5880 | 2025-11-08 | Kaleido           | L   | 0.018      | -            | -                | -                | -         |    -0.34 | B1NGO, flying, lan, Miami, Roninbaby |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,774.79)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $719.00        | $719.00         |
| 2026-03-25 |      0.937 | $375.00        | $351.45         |
| 2026-03-22 |      0.911 | $300.00        | $273.35         |
| 2026-02-24 |      0.740 | $1,500.00      | $1,109.83       |
| 2025-12-30 |      0.366 | $605.00        | $221.28         |
| 2025-11-16 |      0.071 | $1,404.00      | $99.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
