### Roster Details<br />
Team Name: informmix<br />
Roster: 2high, Altekz, k1to, MistR, syrsoN<br />
Global Rank: [278](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [146]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  403.2<br />
<br />
Final Rank Value (403.2) = Starting Rank Value (400.1) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      447 | 2025-07-09 | 1win              | L   | 1.000      | -            | -                | -                | -         |    -3.72 | 2high, Altekz, k1to, MistR, syrsoN    |
|            4 |     2703 | 2025-03-24 | Ninjas in Pyjamas | L   | 0.314      | -            | -                | -                | -         |    -0.03 | Altekz, CacaNito, k1to, MistR, syrsoN |
|            3 |     2709 | 2025-03-24 | kONO              | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     6.55 | Altekz, CacaNito, k1to, MistR, syrsoN |
|            2 |     3677 | 2025-02-21 | BASEMENT BOYS     | L   | 0.107      | -            | -                | -                | -         |    -1.37 | CacaNito, k1to, MistR, PerX, syrsoN   |
|            1 |     3686 | 2025-02-21 | POLET             | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.68 | CacaNito, k1to, MistR, PerX, syrsoN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
