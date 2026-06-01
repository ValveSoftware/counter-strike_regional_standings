### Roster Details<br />
Team Name: Enjoy<br />
Roster: kurosa, nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [166](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [110]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  841.9<br />
<br />
Final Rank Value (841.9) = Starting Rank Value (716.2) + Head To Head Adjustments (125.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.2
- 400 + ( ( 0.166 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 716.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        9 | 2026-05-31 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.598 (0.181)    | 0 (0.000) |    21.96 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           13 |       60 | 2026-05-30 | G2 Ares              | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.598 (0.181)    | 0 (0.000) |    23.85 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           12 |      125 | 2026-05-28 | brazylijski luz      | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.414 (0.125)    | 0 (0.000) |    19.15 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           11 |      231 | 2026-05-25 | Dripmen              | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.280 (0.085)    | 0 (0.000) |    12.51 | kurosa, nbl, roxesz, sh1geo, zazzer |
|           10 |      302 | 2026-05-23 | SAW                  | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.207 (0.063)    | 0 (0.000) |    15.38 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            9 |     1593 | 2026-04-12 | Vexar                | W   | 0.868      | 0.278        | 0.002 (0.000)    | 0.253 (0.061)    | 0 (0.000) |    11.66 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            8 |     1623 | 2026-04-11 | CYBERSHOKE Prospects | W   | 0.860      | 0.278        | 0.006 (0.001)    | 0.500 (0.119)    | 0 (0.000) |    22.18 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            7 |     1673 | 2026-04-09 | ZOTIX                | W   | 0.848      | 0.278        | 0.001 (0.000)    | 0.062 (0.015)    | 0 (0.000) |     9.63 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            6 |     2548 | 2026-03-27 | OLDBOYS PL           | L   | 0.761      | -            | -                | -                | -         |   -11.81 | nbl, roxesz, sh1geo, spiker, zazzer |
|            5 |     3237 | 2026-03-13 | Young Ninjas         | L   | 0.668      | -            | -                | -                | -         |    -6.47 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     4628 | 2026-02-14 | TDK                  | L   | 0.488      | -            | -                | -                | -         |    -1.18 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     4729 | 2026-02-13 | VP.Prodigy           | W   | 0.478      | 0.384        | 0.000 (0.000)    | 0.193 (0.036)    | 0 (0.000) |     5.98 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     4835 | 2026-02-10 | PsychoFace           | L   | 0.460      | -            | -                | -                | -         |    -2.36 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     4862 | 2026-02-09 | VP.Prodigy           | W   | 0.452      | 0.384        | 0.000 (0.000)    | 0.193 (0.034)    | 0 (0.000) |     5.18 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,859.41)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-04-12 |      0.868 | $1,250.00      | $1,084.73       |
| 2026-03-29 |      0.775 | $1,000.00      | $774.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
