### Roster Details<br />
Team Name: NomadS<br />
Roster: clouden, CRYTICAL, HenX, hoolig4n, Paranormal<br />
Global Rank: [267](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [39]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  505.4<br />
<br />
Final Rank Value (505.4) = Starting Rank Value (504.4) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.054 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 504.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       47 | 2025-02-25 | Eruption   | L   | 1.000      | -            | -                | -                | -         |    -3.81 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            5 |       62 | 2025-02-25 | HOTU       | L   | 1.000      | -            | -                | -                | -         |    -8.34 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            4 |       86 | 2025-02-24 | Gods Reign | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.318 (0.045)    | 0 (0.000) |    27.23 | clouden, CRYTICAL, HenX, hoolig4n, Paranormal |
|            3 |      497 | 2025-02-08 | IHC        | L   | 1.000      | -            | -                | -                | -         |    -8.00 | CRYTICAL, HenX, hoolig4n, KRST, shinobi       |
|            2 |     1125 | 2024-12-04 | ATOX       | L   | 0.605      | -            | -                | -                | -         |    -1.09 | CRYTICAL, HenX, hoolig4n, Randyyyy, shinobi   |
|            1 |     1127 | 2024-12-03 | Just Swing | L   | 0.604      | -            | -                | -                | -         |    -4.98 | CRYTICAL, HenX, hoolig4n, Randyyyy, shinobi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
