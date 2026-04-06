### Roster Details<br />
Team Name: Matrix<br />
Roster: EgorMercedes, frakenzor, joly, kyoto666<br />
Global Rank: [300](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [188]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  552.3<br />
<br />
Final Rank Value (552.3) = Starting Rank Value (540.3) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.3
- 400 + ( ( 0.072 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 540.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      686 | 2026-03-23 | ASTRAL   | L   | 1.000      | -            | -                | -                | -         |    -2.79 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            4 |      690 | 2026-03-23 | Wave     | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.092 (0.031)    | 1 (1.000) |    21.20 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            3 |      696 | 2026-03-23 | OlyBet   | L   | 1.000      | -            | -                | -                | -         |    -3.16 | EgorMercedes, frakenzor, joly, kyoto666, md262      |
|            2 |     3588 | 2026-01-15 | MANA     | L   | 0.659      | -            | -                | -                | -         |    -2.76 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |
|            1 |     3592 | 2026-01-15 | MOUZ NXT | L   | 0.659      | -            | -                | -                | -         |    -0.43 | EgorMercedes, frakenzor, joly, kyoto666, MagaPriora |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
