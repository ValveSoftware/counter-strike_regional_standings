### Roster Details<br />
Team Name: Astralis<br />
Roster: device, HooXi, jabbi, Magisk, Staehr<br />
Global Rank: [12](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  1639.2<br />
<br />
Final Rank Value (1639.2) = Starting Rank Value (1670.0) + Head To Head Adjustments (-30.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.736[<sup>1</sup>](#table2)
- Bounty Collected: 0.733[<sup>2</sup>](#table1)
- Opponent Network: 0.354[<sup>2</sup>](#table1)
- LAN Wins: 0.845[<sup>2</sup>](#table1)

The average of these factors is 0.667<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1670.0
- 400 + ( ( 0.667 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1670.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      645 | 2025-11-07 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -6.06 | device, HooXi, jabbi, Magisk, Staehr |
|           37 |      699 | 2025-11-05 | Falcons       | L   | 1.000      | -            | -                | -                | -         |    -6.15 | device, HooXi, jabbi, Magisk, Staehr |
|           36 |      730 | 2025-11-04 | The MongolZ   | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.458 (0.458)    | 1 (1.000) |    22.63 | device, HooXi, jabbi, Magisk, Staehr |
|           35 |      753 | 2025-11-03 | Natus Vincere | W   | 1.000      | 1.000        | 0.699 (0.699)    | 0.275 (0.275)    | 1 (1.000) |    20.11 | device, HooXi, jabbi, Magisk, Staehr |
|           34 |      849 | 2025-10-30 | Aurora        | L   | 0.986      | -            | -                | -                | -         |    -9.10 | HooXi, jabbi, Magisk, ruggah, Staehr |
|           33 |      880 | 2025-10-29 | 3DMAX         | W   | 0.978      | 1.000        | 0.521 (0.510)    | 0.493 (0.482)    | 1 (0.978) |    16.55 | device, HooXi, jabbi, Magisk, Staehr |
|           32 |      908 | 2025-10-28 | Legacy        | L   | 0.972      | -            | -                | -                | -         |    -8.80 | device, HooXi, jabbi, Magisk, Staehr |
|           31 |      935 | 2025-10-27 | MIBR          | W   | 0.967      | 1.000        | -                | 0.370 (0.357)    | 1 (0.967) |     4.97 | device, HooXi, jabbi, Magisk, Staehr |
|           30 |      991 | 2025-10-26 | B8            | L   | 0.960      | -            | -                | -                | -         |   -18.77 | device, HooXi, jabbi, Magisk, Staehr |
|           29 |     1686 | 2025-10-06 | FaZe          | L   | 0.826      | -            | -                | -                | -         |   -14.21 | device, HooXi, jabbi, Magisk, Staehr |
|           28 |     1751 | 2025-10-05 | Aurora        | L   | 0.819      | -            | -                | -                | -         |    -5.78 | device, HooXi, jabbi, Magisk, Staehr |
|           27 |     1802 | 2025-10-04 | Falcons       | L   | 0.812      | -            | -                | -                | -         |    -5.77 | device, HooXi, jabbi, Magisk, Staehr |
|           26 |     1866 | 2025-10-02 | Legacy        | W   | 0.800      | 0.769        | 1.000 (0.615)    | 0.577 (0.354)    | 1 (0.800) |    16.89 | device, HooXi, jabbi, Magisk, Staehr |
|           25 |     1905 | 2025-10-01 | HEROIC        | W   | 0.793      | 0.769        | 0.369 (0.225)    | 0.438 (0.267)    | 1 (0.793) |    11.08 | device, HooXi, jabbi, Magisk, Staehr |
|           24 |     1942 | 2025-09-30 | GamerLegion   | L   | 0.786      | -            | -                | -                | -         |   -15.22 | device, HooXi, jabbi, Magisk, Staehr |
|           23 |     1986 | 2025-09-29 | ENCE          | L   | 0.779      | -            | -                | -                | -         |   -20.21 | device, HooXi, jabbi, Magisk, Staehr |
|           22 |     2034 | 2025-09-28 | Fluxo         | W   | 0.771      | 0.769        | -                | 0.622 (0.369)    | 1 (0.771) |     2.24 | device, HooXi, jabbi, Magisk, Staehr |
|           21 |     2323 | 2025-09-19 | FURIA         | L   | 0.713      | -            | -                | -                | -         |    -3.52 | device, HooXi, jabbi, Magisk, Staehr |
|           20 |     2406 | 2025-09-17 | GamerLegion   | W   | 0.699      | 1.000        | 0.263 (0.184)    | 0.402 (0.281)    | 1 (0.699) |     8.20 | device, HooXi, jabbi, Magisk, Staehr |
|           19 |     2418 | 2025-09-16 | Legacy        | W   | 0.694      | 1.000        | 1.000 (0.694)    | 0.577 (0.400)    | 1 (0.694) |    15.63 | device, HooXi, jabbi, Magisk, Staehr |
|           18 |     2439 | 2025-09-15 | paiN          | L   | 0.687      | -            | -                | -                | -         |   -12.93 | device, HooXi, jabbi, Magisk, Staehr |
|           17 |     2501 | 2025-09-14 | Virtus.pro    | W   | 0.679      | 1.000        | 0.166 (0.113)    | -                | 1 (0.679) |     1.80 | device, HooXi, jabbi, Magisk, Staehr |
|           16 |     2576 | 2025-09-12 | Aurora        | L   | 0.667      | -            | -                | -                | -         |    -4.54 | device, HooXi, jabbi, Magisk, Staehr |
|           15 |     3189 | 2025-08-20 | TYLOO         | L   | 0.513      | -            | -                | -                | -         |   -14.55 | device, HooXi, jabbi, Staehr, stavn  |
|           14 |     3389 | 2025-08-14 | MOUZ          | L   | 0.473      | -            | -                | -                | -         |    -5.68 | device, HooXi, jabbi, Staehr, stavn  |
|           13 |     3609 | 2025-08-09 | Natus Vincere | W   | 0.439      | 0.624        | 0.699 (0.191)    | -                | -         |     7.86 | device, HooXi, jabbi, Staehr, stavn  |
|           12 |     3649 | 2025-08-06 | Rare Atom     | W   | 0.421      | -            | -                | -                | -         |     0.55 | device, HooXi, jabbi, Staehr, stavn  |
|           11 |     3809 | 2025-07-27 | FURIA         | L   | 0.354      | -            | -                | -                | -         |    -1.66 | device, HooXi, jabbi, Staehr, stavn  |
|           10 |     3845 | 2025-07-26 | Vitality      | L   | 0.346      | -            | -                | -                | -         |    -2.40 | device, HooXi, jabbi, Staehr, stavn  |
|            9 |     3855 | 2025-07-25 | paiN          | W   | 0.341      | 0.769        | 0.353 (0.092)    | -                | -         |     3.96 | device, HooXi, jabbi, Staehr, stavn  |
|            8 |     3864 | 2025-07-25 | FURIA         | L   | 0.339      | -            | -                | -                | -         |    -1.53 | device, HooXi, jabbi, Staehr, stavn  |
|            7 |     3891 | 2025-07-23 | B8            | W   | 0.326      | -            | -                | -                | -         |     4.05 | device, HooXi, jabbi, Staehr, stavn  |
|            6 |     3912 | 2025-07-20 | TYLOO         | L   | 0.307      | -            | -                | -                | -         |    -8.65 | device, HooXi, jabbi, Staehr, stavn  |
|            5 |     3935 | 2025-07-19 | BetBoom       | W   | 0.300      | 1.000        | -                | 1.000 (0.300)    | -         |     3.23 | device, HooXi, jabbi, Staehr, stavn  |
|            4 |     3978 | 2025-07-18 | Lynn Vision   | W   | 0.293      | -            | -                | -                | -         |     1.23 | device, HooXi, jabbi, Staehr, stavn  |
|            3 |     3991 | 2025-07-17 | MIBR          | W   | 0.287      | -            | -                | -                | -         |     0.94 | device, HooXi, jabbi, Staehr, stavn  |
|            2 |     4017 | 2025-07-16 | TYLOO         | L   | 0.281      | -            | -                | -                | -         |    -8.03 | device, HooXi, jabbi, Staehr, stavn  |
|            1 |     4034 | 2025-07-15 | MIBR          | W   | 0.274      | -            | -                | -                | -         |     0.85 | device, HooXi, jabbi, Staehr, stavn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($251,692.53)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      1.000 | $72,500.00     | $72,500.00      |
| 2025-11-01 |      1.000 | $31,250.00     | $31,250.00      |
| 2025-10-12 |      0.867 | $8,500.00      | $7,367.16       |
| 2025-09-21 |      0.728 | $67,500.00     | $49,107.21      |
| 2025-08-24 |      0.539 | $20,000.00     | $10,775.76      |
| 2025-08-17 |      0.493 | $18,750.00     | $9,247.19       |
| 2025-08-03 |      0.400 | $10,000.00     | $4,000.68       |
| 2025-07-20 |      0.307 | $220,000.00    | $67,444.53      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
