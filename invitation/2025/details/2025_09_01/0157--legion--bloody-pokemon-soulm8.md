### Roster Details<br />
Team Name: Legion<br />
Roster: Bloody, PokemoN, SOULM8<br />
Global Rank: [157](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [20]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  661.0<br />
<br />
Final Rank Value (661.0) = Starting Rank Value (640.9) + Head To Head Adjustments (20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.9
- 400 + ( ( 0.126 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 640.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      772 | 2025-07-27 | ScarX          | L   | 0.959      | -            | -                | -                | -         |   -14.62 | Bloody, hf, PokemoN, SOULM8, SultaaN |
|            5 |      777 | 2025-07-26 | BAITPEEKKK     | W   | 0.957      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.31 | Bloody, hf, PokemoN, SOULM8, SultaaN |
|            4 |     1228 | 2025-06-29 | Victores Sumus | W   | 0.771      | 0.262        | 0.003 (0.001)    | 0.067 (0.013)    | 0 (0.000) |     9.79 | Bloody, hf, PokemoN, SOULM8, SultaaN |
|            3 |     1230 | 2025-06-29 | 4ever cool     | W   | 0.771      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.60 | Bloody, hf, PokemoN, SOULM8, SultaaN |
|            2 |     1713 | 2025-05-25 | Flshbck        | W   | 0.538      | 0.262        | 0.001 (0.000)    | 0.057 (0.008)    | 0 (0.000) |     7.71 | Bloody, HSB, PokemoN, SOULM8, X1RON  |
|            1 |     1717 | 2025-05-25 | Victores Sumus | W   | 0.537      | 0.262        | 0.003 (0.000)    | 0.067 (0.009)    | 0 (0.000) |     7.39 | Bloody, HSB, PokemoN, SOULM8, X1RON  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,789.25)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      0.959 | $500.00        | $479.41         |
| 2025-06-29 |      0.771 | $1,000.00      | $771.42         |
| 2025-05-25 |      0.538 | $1,000.00      | $538.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
