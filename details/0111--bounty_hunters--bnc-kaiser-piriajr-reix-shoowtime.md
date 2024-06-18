### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  833.1<br />
<br />
Final Rank Value (833.1) = Starting Rank Value (797.4) + Head To Head Adjustments (35.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.4
- 400 + ( ( 0.196 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 797.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      176 | 2024-06-11 | KRÜ           | L   | 1.000      | -            | -                | -                | -         |   -17.07 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           15 |      191 | 2024-06-10 | BESTIA        | L   | 1.000      | -            | -                | -                | -         |    -7.10 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           14 |      226 | 2024-06-09 | inSanitY      | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.315 (0.121)    | 0 (0.000) |    19.52 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |      234 | 2024-06-09 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -11.66 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |      293 | 2024-06-08 | W7M           | W   | 1.000      | 0.450        | 0.001 (0.000)    | 0.364 (0.164)    | 0 (0.000) |    12.50 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |      342 | 2024-06-07 | MIBR          | W   | 1.000      | 0.384        | 0.281 (0.108)    | 0.688 (0.265)    | 0 (0.000) |    31.02 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |      365 | 2024-06-07 | Fluxo         | L   | 1.000      | -            | -                | -                | -         |    -4.52 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |      398 | 2024-06-06 | Case          | W   | 1.000      | 0.384        | 0.026 (0.010)    | 0.579 (0.222)    | 0 (0.000) |    18.27 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |      436 | 2024-06-06 | Case          | W   | 1.000      | 0.450        | 0.026 (0.012)    | 0.579 (0.261)    | 0 (0.000) |    19.88 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |      582 | 2024-06-02 | Hawks         | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.036 (0.014)    | 0 (0.000) |     7.14 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |      639 | 2024-05-31 | Intense       | L   | 1.000      | -            | -                | -                | -         |   -23.94 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |      704 | 2024-05-29 | FURIA Academy | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.087 (0.034)    | 0 (0.000) |     6.89 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |      740 | 2024-05-27 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |   -11.81 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     1856 | 2024-04-16 | MIBR          | L   | 0.784      | -            | -                | -                | -         |    -0.26 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     2077 | 2024-04-08 | RED Canids    | L   | 0.729      | -            | -                | -                | -         |    -2.85 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     2120 | 2024-04-06 | MIBR          | L   | 0.717      | -            | -                | -                | -         |    -0.32 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
