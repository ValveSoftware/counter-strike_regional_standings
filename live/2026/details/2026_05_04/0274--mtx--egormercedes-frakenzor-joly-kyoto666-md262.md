### Roster Details<br />
Team Name: MTX<br />
Roster: EgorMercedes, frakenzor, joly, kyoto666, md262<br />
Global Rank: [274](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [170]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  598.0<br />
<br />
Final Rank Value (598.0) = Starting Rank Value (583.5) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 583.5
- 400 + ( ( 0.099 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 583.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       34 | 2026-05-02 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -1.32 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            8 |       49 | 2026-05-01 | ROUNDS        | L   | 1.000      | -            | -                | -                | -         |   -10.93 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            7 |       52 | 2026-05-01 | SAW           | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.144 (0.044)    | 1 (1.000) |    23.84 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            6 |       56 | 2026-05-01 | G2 Ares       | L   | 1.000      | -            | -                | -                | -         |    -3.53 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            5 |     1775 | 2026-03-23 | ASTRAL        | L   | 0.921      | -            | -                | -                | -         |    -2.97 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            4 |     1779 | 2026-03-23 | Wave          | W   | 0.920      | 0.333        | 0.001 (0.000)    | 0.082 (0.025)    | 1 (0.920) |    16.83 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            3 |     1785 | 2026-03-23 | OlyBet        | L   | 0.920      | -            | -                | -                | -         |    -4.99 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            2 |     4685 | 2026-01-15 | MANA          | L   | 0.472      | -            | -                | -                | -         |    -1.78 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |
|            1 |     4689 | 2026-01-15 | MOUZ NXT      | L   | 0.472      | -            | -                | -                | -         |    -0.60 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
