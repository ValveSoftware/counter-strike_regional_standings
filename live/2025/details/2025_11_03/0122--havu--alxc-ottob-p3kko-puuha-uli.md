### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [122](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  766.8<br />
<br />
Final Rank Value (766.8) = Starting Rank Value (757.9) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.9
- 400 + ( ( 0.191 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 757.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       59 | 2025-10-29 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |   -11.38 | Alxc, ottob, p3kko, puuha, uli |
|            7 |       74 | 2025-10-28 | GenOne        | L   | 1.000      | -            | -                | -                | -         |   -17.88 | Alxc, ottob, p3kko, puuha, uli |
|            6 |      242 | 2025-10-18 | Skinsauna     | L   | 1.000      | -            | -                | -                | -         |   -16.23 | Alxc, ottob, p3kko, puuha, uli |
|            5 |      260 | 2025-10-17 | TMVG          | W   | 1.000      | 0.309        | 0.001 (0.000)    | 0.040 (0.012)    | 1 (1.000) |     9.63 | Alxc, ottob, p3kko, puuha, uli |
|            4 |      275 | 2025-10-17 | AKA HERO KAJO | W   | 1.000      | 0.309        | 0.002 (0.001)    | 0.068 (0.021)    | 1 (1.000) |     6.68 | Alxc, ottob, p3kko, puuha, uli |
|            3 |     1248 | 2025-09-21 | ENCE Academy  | W   | 0.913      | 0.310        | 0.006 (0.002)    | 0.371 (0.105)    | 0 (0.000) |    14.57 | Alxc, ottob, p3kko, puuha, uli |
|            2 |     1277 | 2025-09-20 | ENCE Academy  | W   | 0.906      | 0.310        | 0.006 (0.002)    | 0.371 (0.104)    | 0 (0.000) |    15.38 | Alxc, ottob, p3kko, puuha, uli |
|            1 |     1305 | 2025-09-19 | CSDIILIT      | W   | 0.900      | 0.310        | 0.001 (0.000)    | 0.037 (0.010)    | 0 (0.000) |     8.18 | Alxc, ottob, p3kko, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,278.39)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      1.000 | $581.00        | $581.00         |
| 2025-09-21 |      0.913 | $2,956.00      | $2,697.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
