### Roster Details<br />
Team Name: MTX<br />
Roster: EgorMercedes, frakenzor, md262, sen1ar, yab0ku<br />
Global Rank: [308](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [204]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  561.5<br />
<br />
Final Rank Value (561.5) = Starting Rank Value (555.2) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.2
- 400 + ( ( 0.083 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 555.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1153 | 2026-10-02 | Johnny Speeds | W   | 0.993      | 0.371        | 0.008 (0.003)    | 0.212 (0.078)    | 1 (0.993) |    29.00 | EgorMercedes, frakenzor, md262, sen1ar, yab0ku |
|            9 |     1166 | 2026-10-02 | EAC EXTRA     | L   | 0.993      | -            | -                | -                | -         |   -19.39 | EgorMercedes, frakenzor, md262, sen1ar, yab0ku |
|            8 |     1176 | 2026-10-02 | 9INE          | L   | 0.993      | -            | -                | -                | -         |    -1.90 | EgorMercedes, frakenzor, md262, sen1ar, yab0ku |
|            7 |     1194 | 2026-10-02 | JiJieHao      | L   | 0.992      | -            | -                | -                | -         |    -0.25 | EgorMercedes, frakenzor, md262, sen1ar, yab0ku |
|            6 |     1204 | 2026-10-02 | FOKUS         | L   | 0.992      | -            | -                | -                | -         |    -0.43 | EgorMercedes, frakenzor, md262, sen1ar, yab0ku |
|            5 |     5622 | 2026-05-16 | Azuolas       | L   | 0.066      | -            | -                | -                | -         |    -0.38 | EgorMercedes, frakenzor, joly, md262, Qweall   |
|            4 |     5636 | 2026-05-16 | BASEMENT BOYS | L   | 0.065      | -            | -                | -                | -         |    -0.05 | EgorMercedes, frakenzor, joly, md262, Qweall   |
|            3 |     5817 | 2026-05-10 | BASEMENT BOYS | L   | 0.027      | -            | -                | -                | -         |    -0.02 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            2 |     5832 | 2026-05-10 | HAFO          | W   | 0.025      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.025) |     0.24 | EgorMercedes, frakenzor, joly, kyoto666, md262 |
|            1 |     5838 | 2026-05-10 | Gatorian      | L   | 0.025      | -            | -                | -                | -         |    -0.55 | EgorMercedes, frakenzor, joly, kyoto666, md262 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
