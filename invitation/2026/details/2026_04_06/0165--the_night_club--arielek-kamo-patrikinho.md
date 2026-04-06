### Roster Details<br />
Team Name: The Night Club<br />
Roster: Arielek, Kamo, patrikinho<br />
Global Rank: [165](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [112]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  836.6<br />
<br />
Final Rank Value (836.6) = Starting Rank Value (806.8) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.349[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.8
- 400 + ( ( 0.208 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 806.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      650 | 2026-03-24 | OlyBet       | L   | 1.000      | -            | -                | -                | -         |   -12.09 | Arielek, elem, Kamo, Kizzzi, patrikinho |
|            6 |      702 | 2026-03-23 | KUUSAMO      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (1.000) |     5.56 | Arielek, elem, Kamo, Kizzzi, patrikinho |
|            5 |      709 | 2026-03-23 | EC BANGA     | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.153 (0.051)    | 1 (1.000) |    13.19 | Arielek, elem, Kamo, Kizzzi, patrikinho |
|            4 |      713 | 2026-03-23 | Phantom      | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.634 (0.211)    | 1 (1.000) |    26.75 | Arielek, elem, Kamo, Kizzzi, patrikinho |
|            3 |     3792 | 2025-12-21 | TNC          | L   | 0.492      | -            | -                | -                | -         |    -4.17 | Arielek, benog, eskyy, Kamo, patrikinho |
|            2 |     3800 | 2025-12-20 | DOM TOWAROWY | W   | 0.488      | 0.296        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.488) |     1.43 | Arielek, benog, eskyy, Kamo, patrikinho |
|            1 |     3814 | 2025-12-20 | Phantom      | L   | 0.486      | -            | -                | -                | -         |    -0.81 | Arielek, benog, eskyy, Kamo, patrikinho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($206.75)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.495 | $418.00        | $206.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
