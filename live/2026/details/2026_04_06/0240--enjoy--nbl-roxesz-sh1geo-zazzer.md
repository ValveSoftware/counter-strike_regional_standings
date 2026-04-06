### Roster Details<br />
Team Name: Enjoy<br />
Roster: nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [240](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  670.0<br />
<br />
Final Rank Value (670.0) = Starting Rank Value (651.4) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.4
- 400 + ( ( 0.129 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 651.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      488 | 2026-03-27 | OLDBOYS PL   | L   | 1.000      | -            | -                | -                | -         |   -14.43 | nbl, roxesz, sh1geo, spiker, zazzer |
|            5 |     1155 | 2026-03-13 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |    -9.31 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     2545 | 2026-02-14 | TDK          | L   | 0.861      | -            | -                | -                | -         |    -1.47 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     2646 | 2026-02-13 | VP.Prodigy   | W   | 0.852      | 0.384        | 0.003 (0.001)    | 0.440 (0.144)    | 0 (0.000) |    24.55 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     2752 | 2026-02-10 | QWENTRY      | L   | 0.834      | -            | -                | -                | -         |    -4.60 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     2779 | 2026-02-09 | VP.Prodigy   | W   | 0.826      | 0.384        | 0.003 (0.001)    | 0.440 (0.140)    | 0 (0.000) |    23.92 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
